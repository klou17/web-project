'use client'

import { createContext, type Dispatch, type SetStateAction } from 'react'
import { useSignInModal } from './sign-in-modal'

export const ModalContext = createContext<{
  setShowSignInModal: Dispatch<SetStateAction<boolean>>
}>({
  setShowSignInModal: () => {},
})

export default function ModalProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const { setShowSignInModal, SignInModal, showSignInModal } = useSignInModal()

  return (
    <ModalContext.Provider
      value={{
        setShowSignInModal,
      }}>
      {showSignInModal && <SignInModal />}
      {children}
    </ModalContext.Provider>
  )
}
