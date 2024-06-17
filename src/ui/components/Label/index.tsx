import { StyleProp, Text, TextStyle } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'
import { colors, fontSizes, textColors } from '../../../config/theme'

type Props = {
  size?: 'small' | 'medium' | 'large' | 'xlarge',
  children: any,
  color?: 'purpleNavy' | 'primary' | 'secondary' | 'destructive' | 'white',
  fontWeight?: 'normal' | 'bold' | '700' | '800' | '900',
  style?: StyleProp<TextStyle>
}

const Label = ({ children, color = 'primary', fontWeight = 'normal', size = 'medium', style }: Props) => {
  return (
    <Text style={[{
      color: textColors[color],
      fontWeight,
      fontSize: ms(fontSizes[size])
    }, style]}>{children}</Text>
  )
}

export default Label