import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import DatePicker from '../DatePicker'

type Props = {
  control: Control<any>,
  error?: FieldError,
  label: string,
  name: string,
  onChangeText?: (date: Date) => void
}

const DatePickerController = ({ control, error, label, name, onChangeText = () => { } }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur } }) => (
        <DatePicker
          label={label}
          value={value}
          onChangeText={(e) => { onChange(e); onChangeText(e); }}
          error={error}
        />
      )}
    />
  )
}

export default DatePickerController