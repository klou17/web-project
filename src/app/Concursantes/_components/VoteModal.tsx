import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import type { Contestant } from '@/core/candidates/domain/contestant'
import { Slot } from '@radix-ui/react-slot'
import { ImageSrc } from '@/components/Image'

interface Props {
  contestant: Contestant | null
  setContestant: (contestant: Contestant | null) => void
}

export const VoteModal = ({ contestant, setContestant }: Props) => {
  if (!contestant) return <Slot></Slot>

  return (
    <Dialog open={contestant !== null} onOpenChange={() => setContestant(null)}>
      <DialogContent className={'grid grid-cols-2 gap-4 items-center'}>
        <ImageSrc src={contestant?.photo ?? ''} alt={contestant?.name ?? ''} className={'w-full h-auto rounded-lg'} />

        <div className={'grid gap-4 items-center content-center'}>
          <DialogHeader>
            <DialogTitle>¿Confirmas tu voto para {contestant.name}?</DialogTitle>
          </DialogHeader>

          <Button variant={'destructive'} onClick={() => {}}>
            Confirmar voto
          </Button>

          <Button variant={'ghost'} onClick={() => setContestant(null)}>
            Cancelar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
