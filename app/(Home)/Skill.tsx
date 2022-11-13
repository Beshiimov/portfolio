import React, { FC } from 'react'
import s from './page.module.scss'
import { motion } from 'framer-motion'

type SkillType = {
  text: string
  progress: number
  color: string
}

const Skill: FC<SkillType> = ({ text, progress, color }) => {
  const variants = {
    hiddenProgressBar: { width: 0 },
    enterProgressBar: { width: progress + '%', transition: { duration: 1 } },
    hidden: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0 },
  }
  return (
    <div className={s.chart}>
      <motion.p
        variants={variants}
        initial="hidden"
        whileInView="enter"
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {text}
      </motion.p>
      <div className={s.line}>
        <motion.div
          variants={variants}
          initial="hiddenProgressBar"
          whileInView="enterProgressBar"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={s.progress}
          style={{ width: progress + '%', backgroundColor: color }}
        />
      </div>
    </div>
  )
}

export default Skill
