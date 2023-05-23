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
    }, 2300)
  }, [])

  const loaderVariants = {
    initial: {
      opacity: 1,
      y: 0,
    },
    animate: {
      opacity: 0.3,
      y: '-100%',
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        delay: 1.6,
      },
      transitionEnd: {
        display: 'none',
      },
      exit: {
        opacity: 0.3,
        y: '-100%',
        transition: {
          duration: 0.6,
          ease: 'easeInOut',
        },
        transitionEnd: {
          display: 'none',
        },
      },
    },
  }

  if (loading) {
    return (
      <AnimatePresence mode='wait'>
        <MotionDiv
          className='fixed z-20 top-0 left-0 w-full h-full bg-dark p-12 flex items-start justify-end'
          variants={loaderVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <p className='text-8xl'>
            <CountUp end={100} duration={2.5} />%
          </p>
        </MotionDiv>
      </AnimatePresence>
    )
  } else {
    return null
  }
}

export default InitialLoader
