import { View, Text, StyleSheet, StyleProp, ViewStyle, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { DateTimePickerEvent, DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { ms } from 'react-native-size-matters';
import { colors, fontSizes } from '../../../../config/theme';
import { getShortDate } from '../../../../utils/helpers';
import { FieldError } from 'react-hook-form';
import Label from '../../Label';

type Props = {
  value: Date,
  onChangeText: (date: Date) => void,
  containerStyle?: StyleProp<ViewStyle>,
  label: string,
  error?: FieldError
}

const DatePicker = ({ value, onChangeText, containerStyle, label, error }: Props) => {

  const onChange = (event: DateTimePickerEvent, dateSelected?: Date) => {
    const currentDate = dateSelected || value;
    onChangeText(currentDate);
  };

  const showCalendar = () => {
    DateTimePickerAndroid.open({
      value: value,
      onChange,
      mode: 'date',
      is24Hour: true,
      minimumDate: new Date(),
    });
  };

  return (
    <View style={styles.container}>
      <Label fontWeight='700'>{label}</Label>
      <TouchableOpacity activeOpacity={1} onPress={showCalendar} style={[styles.containerInput, containerStyle]}>
        <Label>{getShortDate(value)}</Label>
      </TouchableOpacity>
      {error && <Label size='small' fontWeight='700'>{error.message!!}</Label>}
    </View>
  )
}

export default DatePicker

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
    paddingVertical: ms(12),
    borderWidth: 1,
    borderRadius: ms(5),
  }
})