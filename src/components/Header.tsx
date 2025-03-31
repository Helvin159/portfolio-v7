'use client'
// React
import React from 'react'

// Next
import { useRouter } from 'next/navigation'

// Components
import Link from 'next/link'
import Image from 'next/image'

// Context
import { useMobileMenu } from '@/context/mobile-menu-context'
import { useAuth } from '../context/auth-provider'

// Images
import openBtn from '@/assets/images/svg/icon-hamburger.svg'
import closeBtn from '@/assets/images/svg/icon-close.svg'

const Header = ({ lastName }: { lastName: string }) => {
  const router = useRouter()
  const { user, avatarUrl } = useAuth()
  const { isOpen, setIsOpen } = useMobileMenu()

  const handleOnClick = () => {
    router.push('/contact')
  }

  const handleMobileMenu = (e: any) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  const handleMobileLink = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-dark-gray m-0 w-full">
      <div className="flex flex-row justify-between my-0 mx-auto max-w-7xl">
        <div className="w-full sm:w-1/2">
          <div className="pt-7 pr-0 pb-4 pl-4 sm:pl-20">
            {avatarUrl && (
              <div className={`${avatarUrl ? '' : 'hidden'}`}>
                <Link href={'/profile'}>
                  <Image src={avatarUrl} alt="User Profile" />
                </Link>
              </div>
            )}
            <div className="header__content__container__title__text ">
              <Link className="text-white text-2xl font-medium leading-5 decoration-0" href={'/'}>
                {lastName ? `Mr. ${lastName}` : 'Loading...'}
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="header__content__container__navs text-right pt-6 px-2 pb-0 sm:py-none sm:px-none ">
            {/* Desktop Nav */}
            <nav className="header__content__container__navs__desktop hidden sm:block">
              <ul className="flex gap-x-16 justify-around items-center list-none pt-2 pr-0 pb-0 pl-8">
                <li className="inline-block list-none m-0 text-center">
                  <Link className="text-white text-lg leading-5 decoration-0" href="/projects">
                    Projects
                  </Link>
                </li>
                <li className="inline-block list-none m-0 text-center">
                  <Link className="text-white text-lg leading-5 decoration-0" href="/about">
                    About
                  </Link>
                </li>
                <li className="inline-block list-none m-0 text-center">
                  <button
                    className="appearance-none bg-black border-0 text-white cursor-pointer text-lg h-9 leading-5 outline-0 px-2 uppercase border-box shadow-btn-highlight"
                    onClick={handleOnClick}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
            {/* Mobile Nav */}
            <nav
              className={`bg-translucent-black bottom-0 left-0 right-0 top-0 opacity-0 absolute duration-150 invisible z-10 block sm:hidden ${isOpen ? 'opacity-100 visible' : ''} `}
            >
              <button
                onClick={handleMobileMenu}
                className="cursor-pointer p-8 text-right outline-0 border-0 "
              >
                <Image src={closeBtn} alt="Close button" />
                <span className="hidden">.</span>
              </button>
              <ul className="left-1/2 top-1/2 absolute -translate-y-1/2 -translate-x-1/2 list-none p-0">
                {/* {window && window.location.pathname.toString() !== '/' && (
                  <li className="border-b-light-gray border-2 my-4 mx-0 pt-0 px-0 pb-4 text-center w-full">
                    <Link href="/" onClick={handleMobileLink}>
                      Home
                    </Link>
                  </li>
                )} */}
                <li className="border-b-light-gray border-2 my-4 mx-0 pt-0 px-0 pb-4 text-center w-full">
                  <Link href="/featured" onClick={handleMobileLink}>
                    Projects
                  </Link>
                </li>
                <li className="border-b-light-gray border-2 my-4 mx-0 pt-0 px-0 pb-4 text-center w-full">
                  <Link href="/about" onClick={handleMobileLink}>
                    About
                  </Link>
                </li>
                <li className="border-b-light-gray border-2 my-4 mx-0 pt-0 px-0 pb-4 text-center w-full">
                  <Link
                    className="appearance-none bg-black border-0 text-white cursor-pointer text-lg h-9 leading-5 outline-0 px-2 uppercase border-box shadow-btn-highlight"
                    href={'/contact'}
                    onClick={handleOnClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <button className="open-btn inline-block sm:hidden" onClick={handleMobileMenu}>
              <Image src={openBtn} alt="Open menu" />
              <span className="hidden">.</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
