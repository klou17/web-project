interface Configuration {
  BASE_URL: string
}

export const configuration = (): Configuration => ({
  BASE_URL: process.env.EXPO_PUBLIC_BASE_URL ?? '',
})
