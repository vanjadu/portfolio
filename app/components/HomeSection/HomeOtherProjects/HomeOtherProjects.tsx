'use client'

import SingleProject from '../SingleProject'
import otherProjects from './otherProjects'
import { motion } from 'framer-motion'

const HomeOtherProjects = () => {
  return (
    <section className='px-4 lg:px-8 pb-8 mt-12'>
      <hr className='border-t-[1px] border-gray-200 w-full mx-auto opacity-20' />
      <div className='mt-8 flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-0'>
        <motion.h1
          viewport={{ once: false }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          className='font-semibold uppercase text-5xl'
        >
          Other projects
        </motion.h1>
        <motion.div
          viewport={{ once: false }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          className='flex flex-col items-start gap-8'
        >
          <p className='w-full lg:w-[40rem] text-xl lg:text-3xl leading-6 lg:leading-10 font-light'>
            Explore other projects that I have worked on.
          </p>
          <div className='w-full flex flex-col items-start gap-8'>
            {otherProjects.map((project, idx) => (
              <SingleProject key={idx} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeOtherProjects
