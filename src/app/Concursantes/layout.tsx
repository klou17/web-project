export default function ContestantLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <main>
      <div className={'min-h-screen flex flex-col'}>
        {children} {modal}
      </div>
    </main>
  )
}
