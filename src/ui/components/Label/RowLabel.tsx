import React from 'react'
import { View } from 'react-native'
import Label from '.'

type Props = {
  label: string
  value: any
}

const RowLabel = ({ label, value }: Props) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Label color='secondary'>{label}</Label>
      <Label fontWeight='700'>{value}</Label>
    </View>
  )
}

export default RowLabel