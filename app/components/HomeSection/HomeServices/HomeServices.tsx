'use client'

import servicesCards from './servicesCards'
import SingleService from '../SingleService'
import Button from '../../Button'
import { motion } from 'framer-motion'

const HomeServices = () => {
  return (
    <section className='px-4 lg:px-8 mt-24 pb-16'>
      <hr className='border-t-[1px] border-gray-200 w-full mx-auto opacity-20' />
      <div className='flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-0 mt-8'>
        <motion.h1
          viewport={{ once: false }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          className='font-semibold text-5xl uppercase'
        >
          Tech I use
        </motion.h1>
        <motion.div
          viewport={{ once: false }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          className='flex flex-col items-start gap-12'
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-8 lg:mt-0'>
            {servicesCards.map((service, idx) => (
              <SingleService key={idx} {...service} />
            ))}
          </div>
          <Button text='View projects' link='#projects' light />
        </motion.div>
      </div>
    </section>
  )
}

export default HomeServices
