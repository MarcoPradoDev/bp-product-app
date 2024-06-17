import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'
import { colors } from '../../../config/theme'
import Label from '../Label'

type Props = {
  title: string,
  type?: 'primary' | 'secondary' | 'destructive',
  onPress: () => void,
  buttonStyle?: StyleProp<ViewStyle>
}

const colorsButton = {
  primary: colors.yellow,
  secondary: colors.grayLight,
  destructive: colors.red
}

const Button = ({ onPress, type = 'primary', buttonStyle = {}, title }: Props) => {

  const colorText = type == 'destructive' ? 'white' : 'primary'

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={.65} style={[{ backgroundColor: colorsButton[type] }, styles.container, buttonStyle]} >
      <View>
        <Label color={colorText} fontWeight='bold' size='medium'>{title}</Label>
      </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    paddingVertical: ms(16),
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: ms(5),
  }
})