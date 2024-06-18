import { View, Text, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { Fragment, startTransition, useEffect, useState, useTransition } from 'react'
import { ms } from 'react-native-size-matters'
import Button from '../components/Button'
import FinancialProductDetail from '../components/Detail/FinancialProductDetail'
import useFinancialProducts from '../../hooks/useFinancialProducts'
import MainLayout from '../layout/MainLayout'
import { StatusService } from '../../utils/helpers'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainStackParamList } from '../routes/MainStack'
import { useNavigation, useRoute } from '@react-navigation/native'
import { IFinancialProduct } from '../../data/entities/ProductModel'
import ActionModal from '../components/Modal/ActionModal'
import LoadingModal from '../components/Modal/LoadingModal'
import Label from '../components/Label'

type ProductDetailScreenRouteProp = NativeStackNavigationProp<MainStackParamList, 'ProductDetail'>;

const ProductDetailScreen = ({ }) => {

  const route = useRoute()
  const navigation = useNavigation<ProductDetailScreenRouteProp>();
  const { id } = route.params as { id: string }

  const [showModal, setShowModal] = useState(false)
  const { statusRes, bProduct, getProductById, deleteProductById } = useFinancialProducts()

  const [isDeletedLoading, setIsDeletedLoading] = useState(false)

  const handleDeleteProduct = async () => {
    setShowModal(false)
    setIsDeletedLoading(true)
    const resDeletedProduct = await deleteProductById(id)
    setTimeout(() => {
      setIsDeletedLoading(false)
      if (resDeletedProduct.isSuccess === true) {
        ToastAndroid.show('Producto eliminado', ToastAndroid.SHORT)
        navigation.goBack()
      } else {
        ToastAndroid.show(resDeletedProduct.message!!, ToastAndroid.SHORT)
      }
    }, 1000)
  }

  useEffect(() => {
    getProductById(id)
    return () => {
    }
  }, [])


  return (
    <MainLayout>
      <View style={{ paddingHorizontal: ms(20), paddingBottom: ms(40), paddingTop: ms(40), flex: 1 }}>
        {statusRes.status === StatusService.LOADING ?
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size='large' />
          </View>
          :
          statusRes.status === StatusService.ERROR ?
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Label fontWeight='bold'>{statusRes.message}</Label>
            </View>
            :
            <Fragment>
              <FinancialProductDetail product={bProduct as IFinancialProduct} />
              <Button title='Editar' type='secondary' buttonStyle={{ marginTop: ms(10) }} onPress={() => { navigation.push('AddEditProduct', { product: bProduct as IFinancialProduct }) }} />
              <Button title='Eliminar' type='destructive' buttonStyle={{ marginTop: ms(10) }} onPress={() => { setShowModal(true) }} />
            </Fragment>
        }
        <ActionModal productName={bProduct?.name} hideModal={() => { setShowModal(false) }} isVisible={showModal} handleConfirm={handleDeleteProduct} />
        <LoadingModal isVisible={isDeletedLoading} />
      </View>
    </MainLayout>
  )
}

export default ProductDetailScreen