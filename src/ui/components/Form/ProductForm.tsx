import { zodResolver } from '@hookform/resolvers/zod';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastAndroid, View } from 'react-native';
import { ms } from 'react-native-size-matters';
import * as z from "zod";
import { addYears, getShortDate } from '../../../utils/helpers';
import { productSchema } from '../../../utils/schemes';
import Button from '../Button';
import DatePickerController from '../TextInput/Controllers/DatePickerController';
import InputController from '../TextInput/Controllers/InputController';
import { IProduct } from '../../../data/entities/ProductModel';
import useBusinessProducts from '../../../hooks/useBusinessProducts';
import LoadingModal from '../Modal/LoadingModal';

type Props = {
  productDefault?: IProduct,
  goToProducts: () => void
}

const ProductForm = ({ productDefault, goToProducts }: Props) => {

  const { createProduct, updateProductById, validProductId } = useBusinessProducts()

  const [isLoading, setIsLoading] = useState(false)

  const currentDate = new Date()
  const defaultReviewDate = getShortDate(addYears(currentDate, 1))

  const { control, handleSubmit, reset, formState: { errors }, setValue, setError } = useForm({
    defaultValues: {
      id: '',
      name: '',
      description: '',
      logo: '',
      releaseDate: currentDate,
      reviewDate: defaultReviewDate,
    },
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (productDefault) {
      setValue('id', productDefault.id)
      setValue('name', productDefault.name)
      setValue('description', productDefault.description)
      setValue('logo', productDefault.logo)
      const dates = productDefault.date_release.split('-')
      const releaseDate = new Date(Number(dates[0]), Number(dates[1]) - 1, Number(dates[2]), 0, 0, 0)
      setValue('releaseDate', releaseDate)
      setValue('reviewDate', `${dates[2]}/${dates[1]}/${dates[0]}`)
    }
  }, [productDefault])

  const onSubmit = async (data: z.infer<typeof productSchema>) => {
    setIsLoading(true)
    const reviewDate = addYears(data.releaseDate, 1).toISOString().split('T')[0]
    const releaseDate = data.releaseDate.toISOString().split('T')[0]
    const product: IProduct = { ...productDefault, ...data, date_release: releaseDate, date_revision: reviewDate }
    if (productDefault) {
      const updateRes = await updateProductById(productDefault.id, product)
      setIsLoading(false)
      if (updateRes.isSuccess === true) {
        ToastAndroid.show('Producto actualizado', ToastAndroid.SHORT)
        goToProducts()
        return
      } else {
        ToastAndroid.show(updateRes.message ?? 'Ocurrio un error', ToastAndroid.SHORT)
      }
    } else {
      const resExist = await validProductId(data.id)
      if (resExist.isIdExist === true) {
        setError('id', { message: 'ID no válido' })
        setIsLoading(false)
        return
      }
      const createRes = await createProduct(product)
      setIsLoading(false)
      if (createRes.isSuccess === true) {
        ToastAndroid.show('Producto creado', ToastAndroid.SHORT)
        goToProducts()
        return
      } else {
        ToastAndroid.show(createRes.message ?? 'Ocurrio un error', ToastAndroid.SHORT)
      }
    }

  }

  return (
    <Fragment>
      <View style={{ gap: ms(10) }}>
        <InputController readonly={productDefault ? true : false} control={control} label='ID' name='id' error={errors.id} />
        <InputController control={control} label='Nombre' name='name' error={errors.name} />
        <InputController control={control} label='Descripción' name='description' error={errors.description} />
        <InputController control={control} label='Logo' name='logo' error={errors.logo} />
        <DatePickerController control={control} label='Fecha Liberación' name='releaseDate' error={errors.releaseDate} onChangeText={value => { setValue('reviewDate', getShortDate(addYears(value, 1))) }} />
        <InputController readonly={true} control={control} label='Fecha Revisión' name='reviewDate' error={errors.reviewDate} />
        <View style={{ height: ms(10) }} />
        <Button
          title='Enviar'
          onPress={handleSubmit(onSubmit)}
        />
        {
          !productDefault &&
          <Button
            title='Reiniciar'
            type='secondary'
            onPress={() => { reset() }}
          />
        }

      </View>
      <LoadingModal isVisible={isLoading} />
    </Fragment>
  )
}

export default ProductForm