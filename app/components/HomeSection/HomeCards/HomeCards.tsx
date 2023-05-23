import React from 'react'
import Image from 'next/image'
import Button from '../../Button'

const HomeCards = () => {
  return (
    <section className='px-4 lg:px-8 w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-5 !text-dark mt-6 pb-16'>
      <div className='bg-light min-h-[30vh] lg:min-h-[50rem] w-full lg:w-1/2 rounded-xl p-8 lg:p-10 flex flex-col items-start justify-between gap-4 lg:gap-0 shadow-xl'>
        <p className='text-xl lg:text-3xl leading-6 lg:leading-10 font-light'>
          Hi! I&apos;m Vanja Dulikravic, passionate React and Next front-end
          developer crafting pixel-perfect designs, transforming ideas into
          reality. Blending functionality and aesthetics to create seamless user
          experiences.
        </p>
        <Button text='A bit about me' />
      </div>
      <div className='bg-light min-h-[30vh] lg:min-h-[50rem] w-full lg:w-1/2 rounded-xl relative overflow-hidden shadow-xl'>
        <Image
          src='/vanja.jpeg'
          alt='Vanja Dulikravic'
          width={1000}
          height={1000}
          className='absolute w-full h-full object-cover'
        />
      </div>
    </section>
  )
}

export default HomeCards
