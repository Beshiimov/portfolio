'use client'
import { FC, useEffect, useState } from 'react'
import motion from '../../components/Framer-motion/Framer-motion'

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
    hidden: { y: 150 },
    enter: { y: 0 },
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
    </section>
  )
}

export default Hero
