import React from 'react'

// CSS
import '@/assets/css/styles.css'
import '@/assets/css/tailwind/output.css'
import { MobileMenuProvider } from '../../context/mobile-menu-context'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <MobileMenuProvider>
          <Header lastName="Rymer" />
          <main>{children}</main>
          <Footer
            name="Helvin Rymer"
            email="helvin159@gmail.com"
            linkedIn=""
            instagram=""
            github=""
          />
        </MobileMenuProvider>
      </body>
    </html>
  )
}
