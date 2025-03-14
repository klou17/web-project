import { configuration } from "@/core/share/configuration"

export async function signIn(email: string, password: string): Promise<void> {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const rawBody = JSON.stringify({
    email: email,
    password: password,
  })

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: headers,
    body: rawBody,
    redirect: 'follow',
  }

  return fetch(configuration().BASE_URL + '/auth/login', requestOptions).then(res => {
    if (res.status === 400) {
      throw Symbol('Invalid Password')
    }

    res.json().then(resBody => {
      const expirationDate = new Date()
      const passTime = expirationDate.getTime() + 3600 * 1000 // 1 hour cookie
      expirationDate.setTime(passTime)

      document.cookie = 'authToken=' + resBody.token + ';expires=' + expirationDate.toUTCString()
    })
  })
}
