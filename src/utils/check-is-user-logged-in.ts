import { Dispatch, SetStateAction } from 'react'
import { User } from '@/payload-types'

/**
 *  Checks if a user is logged in using Payload Rest API.
 *
 *  @returns {Boolean}
 */
export const checkIsUserLoggedIn = async ({
  setUser = null,
}: {
  setUser?: Dispatch<SetStateAction<User | null>> | null
} = {}) => {
  // Check if user is already logged in
  const res = await fetch('/api/users/me', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (res.ok) {
    const data = await res.json()
    if (data.user) {
      if (setUser) {
        setUser(data.user)
      }
      return { user: data.user, isLoggedIn: true }
    }
  }

  return { user: null, isLoggedIn: false }
}
