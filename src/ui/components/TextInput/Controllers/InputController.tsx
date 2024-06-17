import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import Input from '../Input'

type Props = {
  control: Control<any>,
  error?: FieldError,
  label: string,
  name: string,
  readonly?: boolean
}

const InputController = ({ control, error, label, name, readonly }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur } }) => (
        <Input
          label={label}
          value={value}
          readOnly={readonly}
          onChangeText={onChange}
          onBlur={onBlur}
          error={error}
        />
      )}
    />
  )
}

export default InputController