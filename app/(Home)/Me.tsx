'use client'
import { FC } from 'react'
import motion from '../../components/Framer-motion/Framer-motion'
import Image from 'next/image'

import me2 from '/public/assets/images/me-2.jpg'
import s from './page.module.scss'

const Me: FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
  }

  return (
    <section className={s.Me} id="me">
      <div className={s.Me__body + ' container'}>
        <div className={s.Me__text}>
          <motion.h2
            variants={variants}
            initial="hidden"
            whileInView="enter"
            viewport={{ once: true }}
          >
            Beshimov Babadjan
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="enter"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Web Developer, Designer and Music Lover
          </motion.p>

          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="enter"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            I AM A FRONTEND DEVELOPER AND DESIGNER FROM TURKMENISTAN. I AM
            CURRENTLY STUDYING INFORMATION IN THE RUSSIAN FEDERATION. <br />I
            RECENTLY STARTED MY WAY. I LOVE MINIMALISM AND NOTHING ELSE. AS
            DESCRIBED APPLE PHILOSOPHY: "HUMAN IS ALWAYS IN THE CENTER OF THE
            WORLD". <br />I HAVE ALWAYS ADMIRE JOHNNY IVE.
          </motion.p>
        </div>
        <motion.div
          className={s.Me__images}
          variants={variants}
          initial="hidden"
          whileInView="enter"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Image src={me2} width={600} alt="My Photo" placeholder="blur" />
        </motion.div>
      </div>
    </section>
  )
}

export default Me
