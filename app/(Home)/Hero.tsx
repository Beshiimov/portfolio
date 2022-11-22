'use client'
import React, { FC, useEffect, useState } from 'react'
import motion from '../../components/Framer-motion/Framer-motion'
import Image from 'next/image'

import arrowDown from '/public/assets/icons/arrow-down.svg'
import s from './page.module.scss'

const Hero: FC = () => {
  const [text, setText] = useState<string>('Hello')

  const textValues = [
    'Hello',
    "It's Beshimov",
    "I'm a Frontend developer",
    'Welcome to my Profile',
    'have a nice day and good mood',
  ]

  useEffect(() => {
    let i: number = 0
    const interval = setInterval(() => {
      if (i < textValues.length - 1) {
        i++
        setText(textValues[i])
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const variants = {
    hidden: { y: 150, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    exit: { y: -150, opacity: 0 },
  }

  return (
    <section className={s.Hero} id="home">
      <div className={s.Hero__body + ' container'}>
        <div className={s.body__hello}>
          <motion.h1
            key={text}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
          >
            {text}
          </motion.h1>
        </div>
      </div>
      <motion.a
        href={'/#me'}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ delay: 3 }}
      >
        <Image src={arrowDown} alt="To next Section" />
      </motion.a>
    </section>
  )
}

export default Hero
