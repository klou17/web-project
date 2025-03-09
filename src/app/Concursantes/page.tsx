'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'
import type { Contestant } from '@/core/candidates/domain/contestant'

const contestants: Contestant[] = [
  {
    id: '1',
    name: 'Earnest Green',
    photo:
      'https://plus.unsplash.com/premium_photo-1664537980500-30bb5ec506e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyYSUyMGRlJTIwbXVqZXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    social: {
      facebook: 'https://facebook.com/earnestgreen',
      twitter: 'https://twitter.com/earnestgreen',
      instagram: 'https://instagram.com/earnestgreen',
    },
  },
]

const Concursantes = () => {
  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"}>
      {contestants.map(contestant => (
        <Card key={contestant.id} className={"shadow-md rounded-xl overflow-hidden"}>
          <CardHeader className={"flex items-center gap-4"}>
            <Avatar className={"w-16 h-16"}>
              <AvatarImage src={contestant.photo} alt={contestant.name} />
            </Avatar>
            <CardTitle className={"text-lg font-semibold"}>{contestant.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={"text-sm text-muted-foreground"}>{contestant.description}</p>
          </CardContent>
          <CardFooter className={"flex gap-3"}>
            {contestant.social.facebook && (
              <Link href={contestant.social.facebook} target={"_blank"}>
                <Facebook className={"w-5 h-5 text-blue-600 hover:text-blue-800"} />
              </Link>
            )}
            {contestant.social.twitter && (
              <Link href={contestant.social.twitter} target={"_blank"}>
                <Twitter className={"w-5 h-5 text-sky-500 hover:text-sky-700"} />
              </Link>
            )}
            {contestant.social.instagram && (
              <Link href={contestant.social.instagram} target={"_blank"}>
                <Instagram className={"w-5 h-5 text-pink-500 hover:text-pink-700"} />
              </Link>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Concursantes
