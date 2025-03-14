'use client'

import { AuthCard } from '@/app/(auth)/_components/card'
import { signInFormSchema } from '@/lib/auth-schema'
import { useForm } from '@/hooks/useForm'
import { signIn } from '@/core/auth/sign-in'

const SignIn = () => {
  const form = useForm({
    schema: signInFormSchema,
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = () => {
    const { email, password } = form.getValues()
    signIn(email, password)
      .then(() => {
        location.assign('/cantantes')
      })
      .catch(() => {
        form.setError('password', { message: 'La contraseña es incorrecta' }, { shouldFocus: true })
      })
  }

  return (
    <AuthCard
      title={'Iniciar Sesión'}
      description={'Bienvenido de vuelta! Por favor, inicie sesión para continuar'}
      form={form}
      onSubmit={onSubmit}
      fields={[
        {
          name: 'email',
          label: 'Email',
          placeholder: 'john@email.com',
          type: 'email',
        },
        {
          name: 'password',
          label: 'Contraseña',
          placeholder: 'Inserte su contrseña',
          type: 'password',
        },
      ]}
      footerText={'Aún no tiene una cuenta?'}
      footerLink={'/sign-up'}
      footerLinkText={'Crear cuenta'}
      buttonText={'Iniciar Sesión'}
    />
  )
}

export default SignIn
