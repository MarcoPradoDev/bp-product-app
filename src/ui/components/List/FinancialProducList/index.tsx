import React from 'react'
import { ActivityIndicator, FlatList, ListRenderItem, StyleProp, View, ViewStyle } from 'react-native'
import { ms } from 'react-native-size-matters'
import { colors } from '../../../../config/theme'
import { IFinancialProduct } from '../../../../data/entities/ProductModel'
import { StatusService } from '../../../../utils/helpers'
import FinancialProductItem from '../../Items/FinancialProductItem'
import Label from '../../Label'

type Props = {
  containerStyle?: StyleProp<ViewStyle>,
  onPress: (id: string) => void,
  statusRes: { status: StatusService, message?: string }
  data: IFinancialProduct[],
}

const FinancialProducList = ({ containerStyle, onPress, data, statusRes }: Props) => {

  const renderItem: ListRenderItem<IFinancialProduct> = ({ item }) => {
    return <FinancialProductItem
      key={item.id}
      product={item} onPress={onPress} />
  }

  return (
    statusRes.status === StatusService.LOADING
      ?
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
      :
      statusRes.status === StatusService.ERROR
        ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Label>{statusRes.message!!}</Label>
        </View>
        :
        <FlatList
          data={data}
          contentContainerStyle={[{ borderWidth: data.length > 0 ? ms(1) : 0, borderColor: colors.gray, borderRadius: ms(5) }, containerStyle]}
          ItemSeparatorComponent={() => <View style={{ height: 0, borderBottomWidth: ms(1), borderColor: colors.gray }} />}
          ListEmptyComponent={() => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Label>No se encontro ningun producto</Label></View>}
          renderItem={renderItem}
          keyExtractor={item => item.id} />
  )
}

export default FinancialProducList