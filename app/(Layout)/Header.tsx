import { FC } from 'react'
import s from './layout.module.scss'
import Link from 'next/link'

const Header: FC = () => {
  return (
    <header id={s.Header}>
      <div className={s.header__body}>
        <Link href={'/'}>Beshimov</Link>
        <Link href="mailto:beshiimov@gmail.com?subject=Hi Beshimov, I'd like to hire you">
          Hire me
        </Link>
      </div>
    </header>
  )
}

export default Header
