import React from 'react'
// Context
import { AuthProvider } from '@/context/auth-provider'
import { MobileMenuProvider } from '@/context/mobile-menu-context'

// Components
import Footer from '@/components/Footer'
import Header from '@/components/Header'

// CSS
import '@/assets/css/styles.css'
import '@/assets/css/tailwind/output.css'

export const metadata = async () => {
  return {
    description: 'Dev Portfolio V7',
    title: 'Portfolio V7',
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <AuthProvider>
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
        </AuthProvider>
      </body>
    </html>
  )
}
