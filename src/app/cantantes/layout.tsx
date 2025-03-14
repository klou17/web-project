export default function CantantesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <div className={'min-h-screen flex flex-col'}>{children}</div>
    </main>
  )
}
