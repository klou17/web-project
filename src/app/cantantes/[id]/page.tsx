'use client'

import { StatusHandler } from '@/components/StateHanlder'
import { ImageSrc } from '@/components/Image'
import { useParams } from 'next/navigation'
import { useGetSinger } from '@/app/cantantes/hooks/useGetSinger'

const SingerDetail = () => {
  const { id } = useParams()

  const { data: singer, isPending, error } = useGetSinger(id as string)

  return (
    <StatusHandler isLoading={isPending} error={error}>
      {singer && (
        <div className={'max-w-3xl mx-auto p-6 '}>
          <div className={'flex flex-col md:flex-row items-center md:items-start'}>
            <ImageSrc
              src={singer.photo}
              alt={singer.firstName}
              className={'rounded-full shadow-lg mb-4 md:mb-0 md:mr-6'}
            />
            <div>
              <h1 className={'text-3xl font-bold text-gray-900 dark:text-white'}>{singer.stageName}</h1>
              <p className={'text-gray-600 dark:text-gray-300'}>
                {singer.firstName} {singer.lastName}
              </p>
              <p className={'mt-2 text-gray-500 dark:text-gray-400'}>{singer.bio}</p>
              <p className={'mt-2 text-sm text-gray-400'}>
                Fecha de nacimiento: {new Date(singer.birthDate).toLocaleDateString()}
              </p>
              <span
                className={`mt-2 inline-block px-4 py-1 rounded-full text-sm font-semibold ${singer.active ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                {singer.active ? 'Activo' : 'Retirado'}
              </span>
            </div>
          </div>
        </div>
      )}
    </StatusHandler>
  )
}

export default SingerDetail
