interface Configuration {
  BASE_URL: string
}

export const configuration = (): Configuration => ({
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ?? '',
})
