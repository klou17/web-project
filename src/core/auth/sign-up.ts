import { configuration } from '@/core/share/configuration'

export async function signUp(name: string, email: string, password: string): Promise<void> {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const rawBody = JSON.stringify({
    username: name,
    email: email,
    password: password,
  })

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: headers,
    body: rawBody,
    redirect: 'follow',
  }

  return fetch(configuration().BASE_URL + '/auth/register', requestOptions).then(res => {
    if (res.status === 422) {
      throw Symbol('User already exists')
    }
  })
}
