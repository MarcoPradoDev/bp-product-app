import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ms } from 'react-native-size-matters'
import { colors, fontSizes } from '../../../../config/theme';
import { IProduct } from '../../../../data/entities/ProductModel';

type Props = {
  onPress: (id: string) => void,
  product: IProduct
}

const BusinessProductItem = ({ onPress, product }: Props) => {
  return (
    <TouchableOpacity onPress={() => { onPress(product.id) }} style={styles.container} activeOpacity={.65}>
      <View>
        <Text style={styles.text}>{product.name}</Text>
        <Text style={[styles.text, { color: colors.grayText }]}>ID: {product.id}</Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Icon name="chevron-right" size={30} color={colors.gray} />
      </View>
    </TouchableOpacity>
  )
}

export default BusinessProductItem

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: '700',
    fontSize: ms(fontSizes.medium),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: ms(10),
    paddingVertical: ms(12),
  }
})