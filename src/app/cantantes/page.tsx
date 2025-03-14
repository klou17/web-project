'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Vote } from 'lucide-react'
import type { Singer } from '@/core/singers/domain/singer'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { VoteModal } from '@/app/cantantes/_components/VoteModal'
import { ImageSrc } from '@/components/Image'

const singers: Singer[] = [
  {
    id: '1',
    firstName: 'Earnest',
    lastName: 'Green',
    stageName: '',
    photo:
      'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYSUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    birthDate: new Date(),
    active: true,
  },
]

const Cantantes = () => {
  const [singer, setSinger] = useState<Singer | null>(null)

  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'}>
      <VoteModal singer={singer} setSinger={setSinger} />

      {singers.map(singer => (
        <Card key={singer.id} className={'shadow-md rounded-xl overflow-hidden'}>
          <CardHeader className={'flex items-center gap-4'}>
            <ImageSrc src={singer?.photo ?? ''} alt={singer?.firstName ?? ''} className={'w-full h-auto rounded-lg'} />

            <CardTitle className={'text-lg font-semibold'}>
              {singer.firstName} {singer.lastName}
            </CardTitle>
          </CardHeader>
          <CardContent className={'grid gap-4'}>
            <p className={'text-sm text-muted-foreground'}>{singer.bio}</p>
            <Button className={'w-full'} onClick={() => setSinger(singer)}>
              <Vote /> Votar
            </Button>
          </CardContent>
          {/* <CardFooter className={'flex gap-3'}>
            {contestant.social.facebook && (
              <Link href={contestant.social.facebook} target={'_blank'}>
                <Facebook className={'w-5 h-5 text-blue-600 hover:text-blue-800'} />
              </Link>
            )}
            {contestant.social.twitter && (
              <Link href={contestant.social.twitter} target={'_blank'}>
                <Twitter className={'w-5 h-5 text-sky-500 hover:text-sky-700'} />
              </Link>
            )}
            {contestant.social.instagram && (
              <Link href={contestant.social.instagram} target={'_blank'}>
                <Instagram className={'w-5 h-5 text-pink-500 hover:text-pink-700'} />
              </Link>
            )}
          </CardFooter> */}
        </Card>
      ))}
    </div>
  )
}

export default Cantantes
