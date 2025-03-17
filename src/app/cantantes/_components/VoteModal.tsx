import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import type { Singer } from '@/core/singers/domain/singer'
import { Slot } from '@radix-ui/react-slot'
import { ImageSrc } from '@/components/Image'
import { useState } from 'react'
import { DialogDescription } from '@radix-ui/react-dialog'
import { Icon } from '@/components/Icon/Icon'
import { VoteHook } from '@/app/cantantes/_hooks/useVoteSinger'
import Link from 'next/link'
import { StatusHandler } from '@/components/StateHanlder'

interface Props {
  singer: Singer | null
  setSinger: (singer: Singer | null) => void
}

export const VoteModal = ({ singer, setSinger }: Props) => {
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined)
  const votingHook = new VoteHook()

  const authToken = votingHook.getAuthToken()
  const isLogged = authToken !== undefined

  if (!singer) return <Slot />

  let isPending: boolean = false
  const onConfirmVote = () => {
    const galaId = '1' // TO DO: Implement galas
    const singerId = singer.id

    isPending = true
    votingHook
      .voteSinger(galaId, singerId, authToken!)
      .then(() => setIsSuccess(true))
      .catch(() => {
        setIsSuccess(false)
      })
  }

  return (
    <Dialog
      open={singer !== null}
      onOpenChange={() => {
        setSinger(null)
      }}>
      <DialogContent className={'grid grid-cols-2 gap-4 items-center'} aria-describedby={undefined}>
        <ImageSrc src={singer.photo} alt={singer.firstName} className={'w-full h-auto rounded-lg'} />

        <div className={'grid items-center content-center'}>
          {!isLogged ? (
            <div className={'grid items-center gap-5 w-fill'}>
              <Icon name={'BadgeAlert'} className={'w-full h-15'} color={'orange'} />
              <DialogHeader>
                <DialogTitle>Debe iniciar sesión para poder votar</DialogTitle>
              </DialogHeader>
              <DialogFooter className={'grid grid-cols-2 gap-2'}>
                <Button variant={'default'}>
                  <Link href={'/sign-in'}>Iniciar Sesión</Link>
                </Button>

                <Button variant={'default'}>
                  <Link href={'/sign-up'}>Crear cuenta</Link>
                </Button>
              </DialogFooter>
            </div>
          ) : isSuccess === true ? (
            <div className={'grid items-center gap-2'}>
              <Icon name={'BadgeCheck'} className={'w-full h-15'} color={'green'} />
              <DialogHeader>
                <DialogTitle>¡Voto registrado con éxito!</DialogTitle>
              </DialogHeader>
              <DialogDescription className={'text-sm text-muted-foreground'}>
                Recuerde que es un voto por gala*
              </DialogDescription>
            </div>
          ) : isSuccess === false ? (
            <div className={'grid items-center gap-2'}>
              <Icon name={'BadgeX'} className={'w-full h-15'} color={'red'} />
              <DialogHeader>
                <DialogTitle>Parece que ya ha votado en esta gala</DialogTitle>
              </DialogHeader>
              <DialogDescription className={'text-sm text-muted-foreground'}>
                Recuerde que es un voto por gala*
              </DialogDescription>
            </div>
          ) : (
            <StatusHandler isLoading={isPending}>
              <div className={'grid grid-rows-2 items-center gap-5'}>
                <DialogHeader className={'intems-center'}>
                  <DialogTitle>¿Confirmas tu voto para {singer.firstName}?</DialogTitle>
                </DialogHeader>
                <DialogFooter className={'grid grid-cols-2 items-center gap-3'}>
                  <Button variant={'destructive'} onClick={() => onConfirmVote()}>
                    Confirmar voto
                  </Button>

                  <Button variant={'default'} onClick={() => setSinger(null)}>
                    Cancelar
                  </Button>
                </DialogFooter>
              </div>
            </StatusHandler>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
