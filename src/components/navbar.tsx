'use client'

import { useEffect, useState } from 'react'
import { Vote, Menu, X } from 'lucide-react'
import Link from 'next/link'

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={'border-b w-full px-4 sm:px-6'}>
      <div className={'flex items-center justify-between mx-auto max-w-4xl h-16'}>
        <Link href={'/'} className={'flex items-center gap-2'}>
          <Vote className={'h-6 w-6'} />
          <span className={'font-bold'}>Proyecto Web</span>
        </Link>

        <div className={'hidden md:flex gap-4'}>
          <Link href={'/concursantes'}>Concursantes</Link>
          <Link href={'/ajustes'}>Ajustes</Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={'md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800'}>
          {isOpen ? <X className={'h-6 w-6'} /> : <Menu className={'h-6 w-6'} />}
        </button>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden md:hidden flex flex-col items-center bg-white dark:bg-gray-900 shadow-md rounded-b-lg ${
          isOpen ? 'max-h-40 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}>
        <Link href={'/concursantes'}>Concursantes</Link>
        <Link href={'/ajustes'}>Ajustes</Link>
      </div>
    </div>
  )
}
