import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ms } from 'react-native-size-matters'
import { colors, fontSizes } from '../../../config/theme'
import Label from '../Label'

type Props = {
  title?: string,
  icon?: string
}

const Header = ({ icon = 'cash-multiple', title = 'Banco' }: Props) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={ms(20)} color={colors.purpleNavy} />
      <Label style={{ marginLeft: ms(10) }} color='purpleNavy' size='large' fontWeight='bold'>{title.toUpperCase()}</Label>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: ms(16),
    borderBottomWidth: ms(.5),
    borderColor: 'gray'
  }
})