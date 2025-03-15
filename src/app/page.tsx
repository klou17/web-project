// import { Singer } from '@/core/singers/domain/singer'

'use client'
import { StatusHandler } from '@/components/StateHanlder'
import { VotesByGalaPieChart } from './_home/components/VotesByGalaPieChart'
import { useGetVotesByGala } from './_home/hooks/useGetVotesByGala'
import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Home() {
  const [selectedGala, setSelectedGala] = useState<string>('1')
  const { data: votes, isPending, error } = useGetVotesByGala(selectedGala)

  return (
    <main className={'py-5 px-30'}>
      <StatusHandler isLoading={isPending} error={error}>
        <div className={'p-6 space-y-4'}>
          <div className={'grid grid-cols-2 gap-2 items-center justify-self-end'}>
            <h2 className={'font-semibold text-gray-900 dark:text-white'}>Selecciona una Gala</h2>
            <Select onValueChange={setSelectedGala}>
              <SelectTrigger className={'w-[180px]'}>
                <SelectValue placeholder={`Gala ${selectedGala}`} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={'1'}>{`Gala ${selectedGala}`}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <VotesByGalaPieChart votes={votes ?? []} />
        </div>
      </StatusHandler>
    </main>
  )
}
