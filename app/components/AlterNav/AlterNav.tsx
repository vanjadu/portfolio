'use client'

import { useContext } from 'react'
import Link from 'next/link'
import alterLinks from './alterLinks'
import { NavigationContext } from '../../context/NavigationContext'
import socialMedia from '../HomeSection/HomeContact/socialMedia'

const AlterNav = () => {
  const { isNavOpen, toggleNav } = useContext(NavigationContext)

  return (
    <div
      className={`fixed ${
        isNavOpen ? 'bottom-0' : 'bottom-[-100vh]'
      } left-0 w-screen h-screen bg-dark z-[9] flex items-center justify-center transition-all`}
    >
      <div className='w-[95%] h-[70%] lg:h-[80%] bg-lightDark relative top-24 lg:top-10 rounded-xl p-8 flex flex-col items-center justify-between'>
        <div className='flex flex-col items-start justify-between h-[75%] lg:h-[85%] w-full'>
          {alterLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className='w-full flex items-end justify-between border-b border-[#fafafa4a pb-2 alterLink'
              onClick={() => toggleNav(false)}
              scroll={false}
            >
              <h1 className='text-3xl lg:text-6xl uppercase transition relative'>
                {link.title}
              </h1>
              <p className='text-lg opacity-80'>0{link.number}</p>
            </Link>
          ))}
        </div>
        <div className='flex items-center justify-between w-full'>
          <p>Available for freelance</p>
          <div className='flex items-center gap-3'>
            {socialMedia.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                target='_blank'
                className='text-xs uppercase p-2 rounded-full border border-light transition hover:bg-light hover:text-dark'
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlterNav
