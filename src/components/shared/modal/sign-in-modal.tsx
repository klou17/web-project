'use client'

import { useState, type Dispatch, type SetStateAction } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { IceCream, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

function SignInModal({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean
  setShowSignInModal: Dispatch<SetStateAction<boolean>>
}) {
  const [signInClicked, setSignInClicked] = useState(false)

  return (
    <Dialog open={showSignInModal} onOpenChange={setShowSignInModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={'text-center'}>Welcome to WebApp</DialogTitle>
          <DialogDescription className={'text-center'}>Sign in to your account to continue</DialogDescription>
        </DialogHeader>
        <Button
          variant={'outline'}
          className={'w-full'}
          disabled={signInClicked}
          onClick={() => {
            setSignInClicked(true)
            setTimeout(() => {
              setShowSignInModal(false)
              setSignInClicked(false)
            }, 1000)
          }}>
          {signInClicked ? <Loader2 className={'mr-2 size-4 animate-spin'} /> : <IceCream className={'mr-2 size-4'} />}
          Sign In with Google
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false)

  const SignInModalComponent = () => {
    return <SignInModal showSignInModal={showSignInModal} setShowSignInModal={setShowSignInModal} />
  }

  return {
    setShowSignInModal,
    showSignInModal,
    SignInModal: SignInModalComponent,
  }
}
