import { StyleSheet, Text, View, TextInput, StyleProp, ViewStyle } from 'react-native'
import React, { useState, useDeferredValue, useEffect } from 'react'
import { ms } from 'react-native-size-matters'
import { colors, fontSizes } from '../../../../config/theme'

type Props = {
  onChangeText: (text: string) => void,
  containerStyle?: StyleProp<ViewStyle>,
  value: string
}

const Search = ({ onChangeText, containerStyle, value }: Props) => {

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput style={styles.text} placeholderTextColor='black' onChangeText={onChangeText} value={value} placeholder="Search..." keyboardType='web-search' />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: ms(fontSizes.medium),
  },
  container: {
    paddingHorizontal: ms(10),
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: ms(5),
  }
})