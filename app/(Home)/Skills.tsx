'use client'
import React, { FC } from 'react'
import motion from '../../components/Framer-motion/Framer-motion'

import s from './page.module.scss'
import Skill from './Skill'

const Skills: FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
  }

  return (
    <section className={s.Skills} id="skills">
      <div className={s.Skills__body + ' container'}>
        <div className={s.Skills__text}>
          <motion.h2
            variants={variants}
            initial="hidden"
            whileInView="enter"
            viewport={{ once: true }}
          >
            Skills & Experiences
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="enter"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I don't have many projects in my portfolio. I've been developing for
            almost a year now. But I'm not upset that I don't know old
            technologies like Jquery. I am hungry for new technologies. For
            example Next.js. Because now the approach to web development is
            different. <br />I have always wanted to study new technologies and
            find out what they solve.
          </motion.p>
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="enter"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I like developing Frontend. I'm still 21. And this is still the
            beginning of my journey
          </motion.p>
        </div>
        <div className={s.Skills__charts}>
          <Skill text="Frontend" progress={85} color="#fb8b24" />
          <Skill text="React" progress={80} color="aqua" />
          <Skill text="Next.js" progress={65} color="#CD00CD" />
          <Skill
            text="Strapi (Headless free CMS)"
            progress={60}
            color="#4d908e"
          />
          <Skill text="Typescript" progress={70} color="#0EBFE9" />
        </div>
      </div>
    </section>
  )
}

export default Skills
