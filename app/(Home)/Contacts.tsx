import { FC } from 'react'
import s from './page.module.scss'

const Contacts: FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
  }
  return (
    <section className={s.Contacts} id="contacts">
      <div className={s.Contacts__body + ' container'}>
        <div className={s.Contacts__MySocialNetworks}>
          Interested? Let's work together
        </div>
      </div>
    </section>
  )
}

export default Contacts
