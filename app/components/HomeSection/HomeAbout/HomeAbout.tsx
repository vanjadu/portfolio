'use client'

import { motion } from 'framer-motion'

const HomeAbout = () => {
  return (
    <section className='px-4 lg:px-8 pb-8' id='about'>
      <hr className='border-t-[1px] border-gray-200 w-full mx-auto opacity-20' />
      <div className='mt-8 flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-0'>
        <motion.h1
          viewport={{ once: false }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.4 }}
          className='font-semibold uppercase text-5xl'
        >
          About me
        </motion.h1>
        <motion.p
          viewport={{ once: false }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.4 }}
          className='w-full lg:w-1/2 text-xl lg:text-3xl leading-6 lg:leading-10 font-light'
        >
          Passionate front-end web developer with a knack for crafting immersive
          digital experiences. Combining creativity and technical expertise to
          bring ideas to life, I thrive on delivering impactful solutions that
          engage and inspire.
        </motion.p>
      </div>
    </section>
  )
}

export default HomeAbout
