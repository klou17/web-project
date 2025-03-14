'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Vote } from 'lucide-react'
import type { Singer } from '@/core/singers/domain/singer'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { VoteModal } from '@/app/cantantes/_components/VoteModal'
import { ImageSrc } from '@/components/Image'
import { useGetAllSingers } from './hooks/useGetAllSingers'
import { StatusHandler } from '@/components/StateHanlder'
import Link from 'next/link'

const Cantantes = () => {
  const { data: singers, isPending, error } = useGetAllSingers()
  const [singer, setSinger] = useState<Singer | null>(null)

  return (
    <StatusHandler isLoading={isPending} error={error}>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'}>
        <VoteModal singer={singer} setSinger={setSinger} />

        {singers?.map(singer => (
          <Card key={singer.id} className={'shadow-md rounded-xl overflow-hidden'}>
            <CardHeader className={'flex items-center gap-4'}>
              <ImageSrc
                src={singer?.photo ?? ''}
                alt={singer?.firstName ?? ''}
                className={'w-full h-auto rounded-lg'}
              />

              <CardTitle className={'text-lg font-semibold'}>
                {singer.firstName} {singer.lastName}
              </CardTitle>
            </CardHeader>
            <CardContent className={'grid gap-4'}>
              <p className={'text-sm text-muted-foreground line-clamp-2'}>{singer.bio}</p>
              <Link href={`/cantantes/${singer.id}`} className='text-blue-500'>
                Ver más info
              </Link>
              <Button className={'w-full'} onClick={() => setSinger(singer)}>
                <Vote /> Votar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </StatusHandler>
  )
}

export default Cantantes
