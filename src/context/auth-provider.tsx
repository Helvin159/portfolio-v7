'use client'
// React
import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'

// Types
import type { User } from '@/payload-types'

// Utils
import { checkIsUserLoggedIn } from '@/utils/check-is-user-logged-in'

interface AuthContextType {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  loggedIn: boolean
  setLoggedIn: Dispatch<SetStateAction<boolean>>
  token: string | null
  setToken: Dispatch<SetStateAction<string | null>>
  avatarUrl: string | null
  setAvatarUrl: Dispatch<SetStateAction<string | null>>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => null,
  loading: false,
  setLoading: () => null,
  loggedIn: false,
  setLoggedIn: () => null,
  token: null,
  setToken: () => null,
  avatarUrl: null,
  setAvatarUrl: () => null,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  useEffect(
    () => {
      // Set loading to true
      setLoading(true)

      if (!user) {
        // Check if user is logged in, if so, set user in state.
        checkIsUserLoggedIn({ setUser })
      }

      // Set loading to false
      setLoading(false)
    },
    // eslint-disable-next-line
    [],
  )

  const value: AuthContextType = {
    user,
    loading,
    setLoading,
    setUser,
    loggedIn,
    setLoggedIn,
    token,
    setToken,
    avatarUrl,
    setAvatarUrl,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
