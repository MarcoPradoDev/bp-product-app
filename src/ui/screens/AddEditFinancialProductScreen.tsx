import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { ms } from 'react-native-size-matters'
import ProductForm from '../components/Form/FinancialProductForm'
import Label from '../components/Label'
import MainLayout from '../layout/MainLayout'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainStackParamList } from '../routes/MainStack'
import LoadingModal from '../components/Modal/LoadingModal'
import { IFinancialProduct } from '../../data/entities/ProductModel'

type AddEditProductScreenRouteProp = NativeStackNavigationProp<MainStackParamList, 'AddEditProduct'>;

const AddEditProductScreen = () => {
  const route = useRoute()
  const navigation = useNavigation<AddEditProductScreenRouteProp>();

  const { product } = route.params as { product?: IFinancialProduct }

  const goToProducts = () => {
    navigation.navigate('Products')
  }

  return (
    <MainLayout>
      <ScrollView style={{ paddingHorizontal: ms(20), paddingTop: ms(20), flex: 1 }}>
        <Label size='xlarge' style={{ marginBottom: ms(20) }} fontWeight='bold'>FORMULARIO DE REGISTRO</Label>
        <ProductForm goToProducts={goToProducts} productDefault={product} />
      </ScrollView>
    </MainLayout>
  )
}

export default AddEditProductScreen