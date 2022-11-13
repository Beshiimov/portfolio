import { FC } from 'react'
import s from './layout.module.scss'

const Footer: FC = () => {
  return (
    <footer id={s.Footer}>
      <div className="container">
        <p>ALL RIGHTS RESERVED </p>
        <p>© 2022</p>
        <p>Beshiimov</p>
      </div>
    </footer>
  )
}

export default Footer
