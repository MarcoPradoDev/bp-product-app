import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { ms } from 'react-native-size-matters'
import Label from '../Label'
import LabelImage from '../Label/LabelImage'
import RowLabel from '../Label/RowLabel'
import { IProduct } from '../../../data/entities/ProductModel'

type Props = {
  containerStyle?: StyleProp<ViewStyle>,
  product: IProduct
}

const BusinessProductDetail = ({ product, containerStyle }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <Label fontWeight='bold' size='xlarge'>ID: {product.id}</Label>
      <Label >Infomación extra</Label>
      <View style={{ paddingHorizontal: ms(10), flex: 1, marginTop: ms(40), gap: ms(15) }} >
        <RowLabel label='Nombre' value={product.name} />
        <RowLabel label='Descripción' value={product.description} />
        <LabelImage uri={product.logo} />
        <RowLabel label='Fecha liberación' value={product.date_release} />
        <RowLabel label='Fecha revisión' value={product.date_revision} />
      </View>
    </View>
  )
}

export default BusinessProductDetail