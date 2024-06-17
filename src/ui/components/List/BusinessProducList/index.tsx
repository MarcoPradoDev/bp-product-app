import { ActivityIndicator, FlatList, ListRenderItem, StyleProp, View, ViewStyle } from 'react-native'
import React from 'react'
import BusinessProductItem from '../../Items/BusinessProductItem'
import { ms, s } from 'react-native-size-matters'
import { colors } from '../../../../config/theme'
import { IProduct } from '../../../../data/entities/ProductModel'
import Label from '../../Label'
import { StatusService } from '../../../../utils/helpers'

type Props = {
  containerStyle?: StyleProp<ViewStyle>,
  onPress: (id: string) => void,
  statusRes: { status: StatusService, message?: string }
  data: IProduct[],

}

const BusinessProductList = ({ containerStyle, onPress, data, statusRes }: Props) => {

  const renderItem: ListRenderItem<IProduct> = ({ item }) => {
    return <BusinessProductItem
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

export default BusinessProductList