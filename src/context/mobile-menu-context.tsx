'use client'
import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

interface MobileMenuProvider {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileMenuContext = createContext<MobileMenuProvider>({
  isOpen: false,
  setIsOpen: () => null,
})

export const MobileMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const value: MobileMenuProvider = { isOpen, setIsOpen }

  return <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>
}

export const useMobileMenu = () => {
  const context = React.useContext(MobileMenuContext)
  if (context === undefined) {
    throw new Error('useMobileMenu must be used within an MobileMenuProvider')
  }
  return context
}
