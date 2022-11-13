import React, { FC } from 'react'

import s from './layout.module.scss'

const Navigation: FC = () => {
  return (
    <div className={s.Navigation}>
      <a href={'/#home'}>Home</a>
      <a href={'/#me'}>Me</a>
      <a href={'/#skills'}>Skills</a>
      <a href={'/#my-projects'}>My Projects</a>
      <a href={'/#contacts'}>Contacts</a>
    </div>
  )
}

export default Navigation
