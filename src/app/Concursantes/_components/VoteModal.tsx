import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import type { Contestant } from '@/core/candidates/domain/contestant'
import { Slot } from '@radix-ui/react-slot'
import { ImageSrc } from '@/components/Image'
import { useState } from 'react'
import { DialogDescription } from '@radix-ui/react-dialog'
import { BadgeCheck } from 'lucide-react'

interface Props {
  contestant: Contestant | null
  setContestant: (contestant: Contestant | null) => void
}

export const VoteModal = ({ contestant, setContestant }: Props) => {
  const [isSuccess, setIsSuccess] = useState(false)

  if (!contestant) return <Slot />

  return (
    <Dialog
      open={contestant !== null}
      onOpenChange={() => {
        setContestant(null)
        setIsSuccess(false)
      }}>
      <DialogContent className={'grid grid-cols-2 gap-4 items-center'}>
        <ImageSrc src={contestant?.photo ?? ''} alt={contestant?.name ?? ''} className={'w-full h-auto rounded-lg'} />

        <div className={'grid gap-4 items-center content-center'}>
          {isSuccess ? (
            <div className={'grid items-center gap-2'}>
              <BadgeCheck className={'w-full h-15'} color={'green'} />
              <DialogHeader>
                <DialogTitle>¡Voto registrado con éxito!</DialogTitle>
              </DialogHeader>
              <DialogDescription className={'text-sm text-muted-foreground'}>
                Recuerda que es un voto por día*
              </DialogDescription>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>¿Confirmas tu voto para {contestant.name}?</DialogTitle>
              </DialogHeader>

              <Button variant={'destructive'} onClick={() => setIsSuccess(true)}>
                Confirmar voto
              </Button>

              <Button variant={'ghost'} onClick={() => setContestant(null)}>
                Cancelar
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
