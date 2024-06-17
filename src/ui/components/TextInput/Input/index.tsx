import { View, Text, TextInputProps, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { colors, fontSizes } from '../../../../config/theme'
import { ms } from 'react-native-size-matters'
import { FieldError } from 'react-hook-form'
import Label from '../../Label'


const Input = ({ ...props }: { label: string, error?: FieldError } & TextInputProps) => {
  return (
    <View style={styles.container}>
      <Label fontWeight='700'>{props.label}</Label>
      <View style={[styles.containerInput, { borderColor: props.error ? colors.red : colors.gray, backgroundColor: props.readOnly ? colors.grayLight : 'transparent', opacity: props.readOnly ? .5 : 1 }]}>
        <TextInput  {...props} style={styles.text} placeholderTextColor='black' keyboardType='default' />
      </View>
      {props.error && <Label fontWeight='700' size='small' color='destructive'>{props.error.message!!}</Label>}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    gap: ms(2),
  },
  text: {
    color: 'black',
    fontSize: ms(fontSizes.medium),
  },
  containerInput: {
    paddingHorizontal: ms(10),
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: ms(5),
  }
})