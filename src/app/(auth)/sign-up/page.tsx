'use client'

import { useForm } from '@/hooks/useForm'

import { formSchema } from '@/lib/auth-schema'
import { AuthCard } from '@/app/(auth)/_components/card'
import { sign_up } from '@/core/auth/sign-up'
import { sign_in } from '@/core/auth/sign-in'

const SignUp = () => {
  const form = useForm({
    schema: formSchema,
    defaultValues: { name: '', email: '', password: '' },
  })

  const onSubmit = () => {
    const { name, email, password } = form.getValues()
    sign_up(name, email, password)
      .then(() => {
        sign_in(email, password).then(() => location.assign('/cantantes'))
      })
      .catch(() => {
        form.setError('email', { message: 'El email ya está en uso' }, { shouldFocus: false })
      })
  }

  return (
    <AuthCard
      title={'Crear Cuenta'}
      description={'Cree su cuenta antes de continuar'}
      form={form}
      onSubmit={onSubmit}
      fields={[
        { name: 'name', label: 'Nombre', placeholder: 'John Doe' },
        {
          name: 'email',
          label: 'Email',
          placeholder: 'john@email.com',
          type: 'email',
        },
        {
          name: 'password',
          label: 'Contraseña',
          placeholder: 'Inserte una contraseña',
          type: 'password',
        },
      ]}
      footerText={'Ya tiene una cuenta?'}
      footerLink={'/sign-in'}
      footerLinkText={'Iniciar sesión'}
      buttonText={'Crear Cuenta'}
    />
  )
}

export default SignUp
