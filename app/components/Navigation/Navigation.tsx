'use client'

import Logo from '../Logo'
import { FiMenu, FiX } from 'react-icons/fi'
import useScrollDirection from '@/app/hooks/useScrollDirection'
import { useContext } from 'react'
import { NavigationContext } from '../../context/NavigationContext'

const Navigation = () => {
  const scrollDirection = useScrollDirection()

  const { isNavOpen, toggleNav } = useContext(NavigationContext)

  const handleAlterNav = () => {
    toggleNav(!isNavOpen)
  }

  let isHidden = false

  if (scrollDirection === 'down' && !isNavOpen) {
    isHidden = true
  }

  return (
    <header
      className={`fixed z-10 ${
        isHidden ? 'top-[-15vh]' : 'top-0'
      } w-full mx-auto flex items-center justify-between h-[14vh] px-5 lg:px-16 transition-all`}
    >
      <Logo />
      <div className='flex items-center gap-4'>
        <a
          href='mailto:vanjadulikravicc@gmail.com'
          className='uppercase py-3 px-4 bg-lightDark font-extralight rounded-full text-sm border border-transparent hover:border-light hover:scale-[1.05] transition tracking-wider active:scale-95'
        >
          Contact
        </a>
        <div
          onClick={handleAlterNav}
          className='w-12 lg:w-14 h-12 lg:h-14 bg-light rounded-full cursor-pointer flex items-center justify-center transition hover:scale-95 active:scale-[.88]'
        >
          {isNavOpen ? (
            <FiX className='text-2xl text-dark' />
          ) : (
            <FiMenu className='text-2xl text-dark' />
          )}
        </div>
      </div>
    </header>
  )
}

export default Navigation
