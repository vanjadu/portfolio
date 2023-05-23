'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from '../Logo'
import { FiMenu } from 'react-icons/fi'

const Navigation = () => {
  const [isGoingdown, setIsGoingdown] = useState<boolean>(false)

  return (
    <header className='fixed z-10 top-0 w-full mx-auto flex items-center justify-between h-[14vh] px-5 lg:px-16'>
      <Logo />
      <div className='flex items-center gap-4'>
        <Link
          href='/'
          className='uppercase py-3 px-4 bg-lightDark font-extralight rounded-full text-sm border border-transparent hover:border-light hover:scale-[1.05] transition tracking-wider'
        >
          Contact
        </Link>
        <div className='w-12 lg:w-14 h-12 lg:h-14 bg-light rounded-full cursor-pointer flex items-center justify-center transition hover:scale-95 active:scale-[.88]'>
          <FiMenu className='text-2xl text-dark' />
        </div>
      </div>
    </header>
  )
}

export default Navigation