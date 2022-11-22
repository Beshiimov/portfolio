'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import motion from '../../components/Framer-motion/Framer-motion'

import perfumery from '/public/assets/images/Project-perfumery.jpg'
import moviee from '/public/assets/images/Project-moviee.jpg'
import s from './page.module.scss'

const Projects: FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
  }

  return (
    <section className={s.Projects} id="my-projects">
      <div className={s.Projects__body + ' container'}>
        <motion.h2
          variants={variants}
          initial="hidden"
          whileInView="enter"
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className={s.projectRow}>
          <div className={s.project}>
            <Link href={'https://perfume-topaz.vercel.app'}>
              <Image src={perfumery} alt="My Project" placeholder="blur" />
            </Link>
          </div>
          <div className={s.project}>
            <Link href={'https://movie-website-puce.vercel.app/home'}>
              <Image src={moviee} alt="My Project" placeholder="blur" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
