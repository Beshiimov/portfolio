import { Montserrat } from '@next/font/google'

import Header from '../(Layout)/Header'
import Navigation from '../(Layout)/Navigation'
import '../styles/index.scss'

const poppins = Montserrat({
  weight: '700',
  subsets: ['cyrillic', 'latin'],
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Welcome to my Portfolio | Beshimov</title>
      </head>
      <body className={poppins.className}>
        <Header />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
