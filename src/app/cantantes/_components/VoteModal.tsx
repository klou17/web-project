import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import type { Singer } from '@/core/singers/domain/contestant'
import { Slot } from '@radix-ui/react-slot'
import { ImageSrc } from '@/components/Image'
import { useState } from 'react'
import { DialogDescription } from '@radix-ui/react-dialog'
import { BadgeCheck } from 'lucide-react'

interface Props {
  singer: Singer | null
  setSinger: (singer: Singer | null) => void
}

export const VoteModal = ({ singer, setSinger }: Props) => {
  const [isSuccess, setIsSuccess] = useState(false)

  if (!singer) return <Slot />

  return (
    <Dialog
      open={singer !== null}
      onOpenChange={() => {
        setSinger(null)
        setIsSuccess(false)
      }}>
      <DialogContent className={'grid grid-cols-2 gap-4 items-center'}>
        <ImageSrc src={singer.photo} alt={singer.firstName} className={'w-full h-auto rounded-lg'} />

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
                <DialogTitle>¿Confirmas tu voto para {singer.firstName}?</DialogTitle>
              </DialogHeader>

              <Button variant={'destructive'} onClick={() => setIsSuccess(true)}>
                Confirmar voto
              </Button>

              <Button variant={'ghost'} onClick={() => setSinger(null)}>
                Cancelar
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
