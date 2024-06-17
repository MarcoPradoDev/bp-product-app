import React from 'react'
import { Image, View } from 'react-native'
import { ms } from 'react-native-size-matters'
import Label from '.'
type Props = {
  uri: string
}

const LabelImage = ({ uri }: Props) => {
  return (
    <View>
      <Label color='secondary'>Logo</Label>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image source={{ uri }} style={{ width: ms(180), height: ms(100) }} />
      </View>
    </View>
  )
}

export default LabelImage