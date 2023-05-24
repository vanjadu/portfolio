'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'

const InitialLoader = () => {
  const MotionDiv = motion.div
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    document.body.style.overflowY = 'hidden'

    setTimeout(() => {
      setLoading(false)
      document.body.style.overflowY = 'auto'
    }, 2800)
  }, [])

  const loaderVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: '-100%',
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        delay: 1.8,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }
  const loaderVariantsTwo = {
    initial: {
      opacity: 1,
      y: 0,
    },
    animate: {
      y: '-100%',
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        delay: 1.9,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }

  // if (loading) {
  return (
    <AnimatePresence mode='wait'>
      <MotionDiv
        className='fixed z-30 top-0 left-0 w-full h-screen bg-dark p-4 lg:p-12 flex items-start justify-end'
        variants={loaderVariants}
        initial='initial'
        animate='animate'
      >
        <p className='text-8xl'>
          <CountUp start={0} end={100} duration={2.5} suffix='%' />
        </p>
      </MotionDiv>
      <MotionDiv
        className='fixed z-20 top-0 left-0 w-full h-screen bg-light'
        variants={loaderVariantsTwo}
        initial='initial'
        animate='animate'
      ></MotionDiv>
    </AnimatePresence>
  )
  // } else {
  //   return null
  // }
}

export default InitialLoader
