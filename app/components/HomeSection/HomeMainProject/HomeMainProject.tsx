'use client'

import Image from 'next/image'
import Button from '../../Button'
import { motion } from 'framer-motion'

const HomeMainProject = () => {
  return (
    <motion.section
      viewport={{ once: false }}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
      className='mt-8 w-full h-[95vh] flex items-center justify-center pb-6 !text-dark'
      id='projects'
    >
      <div className='w-[90%] lg:w-[95%] h-[95%] rounded-xl bg-light flex flex-col lg:flex-row items-center overflow-hidden gap-4 lg:gal-0'>
        <div className='w-full lg:w-1/2 h-1/2 lg:h-full p-8 lg:p-10 flex flex-col items-start justify-between gap-4 lg:gap-0'>
          <div className='flex flex-col items-start gap-4'>
            <h1 className='text-3xl lg:text-7xl'>
              Pronto Take Away Pizza Kurier
            </h1>
            <div className='flex items-center gap-3 !text-lightDark'>
              <p className='text-xs uppercase p-2 rounded-full border border-lightDark'>
                Next 13
              </p>
              <p className='text-xs uppercase p-2 rounded-full border border-lightDark'>
                TypeScript
              </p>
              <p className='text-xs uppercase p-2 rounded-full border border-lightDark'>
                TailwindCSS
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-8'>
            <p>
              Delivering a seamless online pizza ordering experience, I
              spearheaded the development of a robust React application.
              Leveraging the power of React, Tailwind CSS, and Redux, combined
              with an Express server and PostgreSQL database integration, the
              app offers a user-friendly interface, real-time order tracking,
              and secure payment processing with Stripe. This bespoke solution
              optimizes the ordering process for the pizza restaurant, ensuring
              customer satisfaction and operational efficiency.
            </p>
            <div className='pointer-events-none opacity-75 cursor-not-allowed flex flex-col items-start gap-3'>
              <Button text='Open the website' />
              <p>Still in development. Coming soon!</p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 h-1/2 lg:h-full bg-black relative overflow-hidden'>
          <Image
            src='/mockup.png'
            alt='hero'
            width={1000}
            height={1000}
            className='absolute w-full h-[101%] object-cover'
          />
        </div>
      </div>
    </motion.section>
  )
}

export default HomeMainProject
