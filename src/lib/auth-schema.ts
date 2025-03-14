import { z } from 'zod'

export const formSchema = z.object({
  name: z
    .string()
    .nonempty('El nombre no puede estar vacío')
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    .max(50, { message: 'El nombre no puede tener más de 50 caracteres' }),
  email: z.string().email({ message: 'Por favor inserte una dirección de email válida' }).min(2).max(50),
  password: z
    .string()
    .nonempty('La contraseña no puede estar vacía')
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    .max(50, { message: 'La contraseña no debe tener más de 50 caracteres' }),
})

export const signInFormSchema = formSchema.pick({
  email: true,
  password: true,
})
