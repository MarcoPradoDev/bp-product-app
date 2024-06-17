import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useDeferredValue, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { ms } from 'react-native-size-matters'
import useBusinessProducts from '../../hooks/useBusinessProducts'
import Button from '../components/Button'
import BusinessProductList from '../components/List/BusinessProducList'
import Search from '../components/TextInput/Search'
import MainLayout from '../layout/MainLayout'
import { MainStackParamList } from '../routes/MainStack'

type ProductsScreenRouteProp = NativeStackNavigationProp<MainStackParamList, 'Products'>;

const ProductsScreen = () => {

  const navigation = useNavigation<ProductsScreenRouteProp>()
  const { filterProducts, bProducts, statusRes } = useBusinessProducts()
  const controllerRef = useRef<AbortController | null>()

  const [search, setSearch] = useState('')
  const deferredSearch = useDeferredValue(search)

  const callProductsApi = () => {
    if (controllerRef.current) controllerRef.current.abort()
    controllerRef.current = new AbortController()
    filterProducts(deferredSearch, controllerRef.current)
  }

  useEffect(() => {
    callProductsApi()
    const unsubscribe = navigation.addListener('focus', () => {
      callProductsApi()
    });
    return () => {
      if (controllerRef.current) controllerRef.current.abort()
      unsubscribe()
    }
  }, [deferredSearch, navigation])


  return (
    <MainLayout>
      <View style={{ paddingHorizontal: ms(20), paddingVertical: ms(40), flex: 1 }}>
        <Search onChangeText={setSearch} value={search} containerStyle={{ marginBottom: ms(30) }} />
        <BusinessProductList data={bProducts} statusRes={statusRes} onPress={(id) => { navigation.push('ProductDetail', { id: id }) }} />
        <Button title='Agregar' buttonStyle={{ marginTop: ms(30) }} onPress={() => { navigation.push('AddEditProduct', {}) }} />
      </View>
    </MainLayout>
  )
}

export default ProductsScreen