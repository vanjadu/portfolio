'use client'

import Logo from '../../Logo'
import Link from 'next/link'
import socialMedia from './socialMedia'
import { FiCornerRightUp } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'

const HomeContact = () => {
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence mode='wait'>
      <section className='mt-8 w-full h-screen flex items-center justify-center'>
        <motion.div
          className='w-[100%] h-[100%] bg-light rounded-xl overflow-hidden p-8 flex flex-col items-center justify-between !text-dark'
          whileInView={{
            scale: 0.92,
            transition: {
              duration: 0.6,
              delay: 0.3,
            },
          }}
        >
          <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-0'>
            <p>Front-end developer</p>
            <Logo dark />
            <p>Available for freelance</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='text-center text-5xl lg:text-8xl uppercase'>
              Interested in
              <br />
              working together?
            </h1>
            <div className='flex flex-col items-center text-center gap-2'>
              <p>Shoot me a message:</p>
              <Link
                href='mailto:vanjadulikravicc@gmail.com'
                className='text-lg underline tracking-wide transition hover:opacity-70'
              >
                vanjadulikravicc@gmail.com
              </Link>
            </div>
          </div>
          <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-0'>
            <p>Developed by Me</p>
            <div className='flex items-center gap-3'>
              {socialMedia.map((item, idx) => (
                <Link
                  key={item.title + idx}
                  href={item.href}
                  target='_blank'
                  className='text-xs uppercase p-2 rounded-full border border-lightDark transition hover:text-light hover:bg-lightDark'
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <p
              onClick={scrollToTopHandler}
              className='flex items-center gap-2 transition hover:scale-105 cursor-pointer'
            >
              Back to top <FiCornerRightUp />
            </p>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  )
}

export default HomeContact
