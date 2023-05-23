import React from 'react'

const HomeHero = () => {
  return (
    <section className='relative flex overflow-x-hidden bg-accentColor mt-32 lg:mt-16'>
      <div className='animate-marquee whitespace-nowrap text-yellowColor'>
        <span
          className='text-[6rem] lg:text-[16rem] mx-4 font-[500] uppercase
        '
        >
          Front-end Developer
        </span>
        <span className='text-[6rem] lg:text-[16rem] mx-4 font-[500] uppercase'>
          Front-end Developer
        </span>
        <span className='text-[6rem] lg:text-[16rem] mx-4 font-[500] uppercase'>
          Front-end Developer
        </span>
        <span className='text-[6rem] lg:text-[16rem] mx-4 font-[500] uppercase'>
          Front-end Developer
        </span>
        <span className='text-[6rem] lg:text-[16rem] mx-4 font-[500] uppercase'>
          Front-end Developer
        </span>
      </div>
      <div className='absolute top-0 animate-marquee2 whitespace-nowrap text-yellowColor'>
        <span className='text-[6rem] lg:text-[16rem] mx-4 font-[500] uppercase'>
          Front-end Developer
        </span>
        <span className='text-[6rem] lg:text-[16rem] mx-4 font-[500] uppercase'>
          Front-end Developer
        </span>
        <span className='text-[6rem] lg:text-[16rem] mx-4 font-[500] uppercase'>
          Front-end Developer
        </span>
        <span className='text-[6rem] lg:text-[16rem] mx-4 font-[500] uppercase'>
          Front-end Developer
        </span>
        <span className='text-[6rem] lg:text-[16rem] mx-4 font-[500] uppercase'>
          Front-end Developer
        </span>
      </div>
    </section>
  )
}

export default HomeHero
