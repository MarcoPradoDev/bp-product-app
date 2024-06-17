import { z } from 'zod'

export const productSchema = z.object({
  id: z.string().nonempty('Este campo es requerido!').min(3, 'Minimo 3 caracteres').max(10, 'Maximo 10 caracteres').trim(),
  name: z.string().nonempty('Este campo es requerido!').min(5, 'Minimo 5 caracteres').max(100, 'Maximo 100 caracteres').trim(),
  description: z.string().nonempty('Este campo es requerido!').min(10, 'Minimo 10 caracteres').max(200, 'Maximo 200 caracteres').trim(),
  logo: z.string().nonempty('Este campo es requerido!').trim(),
  releaseDate: z.date(),
  reviewDate: z.string().trim(),
});