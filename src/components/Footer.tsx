'use client'
import React, { useContext, useRef } from 'react'
// import emailjs from 'emailjs-com'

// Utils
// import { emailRegex } from '@/utils/utils'

// Images
import linkedInImg from '@/assets/images/svg/icon-linkedin.svg'
import instagramImg from '@/assets/images/svg/icon-instagram.svg'
import githubImg from '@/assets/images/svg/icon-github-square.svg'

// Context
import { useAuth } from '../context/auth-provider'
import Link from 'next/link'
import Image from 'next/image'

type FooterProps = {
  name: string
  email: string
  linkedIn: string
  instagram: string
  github: string
}

const Footer = ({ name, email, linkedIn, instagram, github }: FooterProps) => {
  const loadingText = 'loading...'
  const { user } = useAuth()

  console.log(user)

  const fName = useRef(null)
  const fEmail = useRef(null)
  const fMsg = useRef(null)
  const fPjType = useRef(null)
  const form = useRef(null)

  return (
    <div className="bg-light-gray m-0 pt-14 px-0 pb-0.5">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col-reverse flex-wrap justify-center items-center m-0 px-20 py-0 md:p-0 lg:flex-row lg:items-baseline lg:justify-evenly">
          <div className="footer__content__contact__container__sizing">
            <div className="">
              <p className="text-white text-2xl italic font-light leading-10 text-left">
                // Drop Me A Line
              </p>
            </div>
            <form ref={form}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="YOUR NAME *"
                ref={fName}
                className="appearance-none border-box text-xl max-w-xl outline-0 py-0 px-2 bg-input-bg text-input-text border-2 border-input-border rounded block font-light h-14 leading-6 mb-4"
                required
              />
              <p className="hidden">Please enter a name.</p>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="YOUR EMAIL *"
                ref={fEmail}
                className="appearance-none border-box text-xl max-w-xl outline-0 py-0 px-2 bg-input-bg text-input-text border-2 border-input-border rounded block font-light h-14 leading-6 mb-4"
                required
              />
              <p className="hidden">Please enter a valid email address.</p>
              <input
                type="text"
                id="pjType"
                name="pjType"
                placeholder="WHAT TYPE OF PROJECT ARE YOU LOOKING FOR?"
                className="appearance-none border-box text-xl max-w-xl outline-0 py-0 px-2 bg-input-bg text-input-text border-2 border-input-border rounded block font-light h-14 leading-6 mb-4"
                ref={fPjType}
              />
              <input
                type="text"
                id="msg"
                name="msg"
                placeholder="WRITE A MESSAGE..."
                className="appearance-none border-box text-xl max-w-xl outline-0 py-0 px-2 bg-input-bg text-input-text border-2 border-input-border rounded block font-light h-14 leading-6 mb-4"
                ref={fMsg}
              />
            </form>
            <button
              type="submit"
              className="bg-white border-2 shadow-btn-highlight text-black cursor-pointer h-12 leading-6 my-12 mx-auto uppercase appearance-none border-box text-xl max-w-xl outline-0 py-0 px-2 w-full"
            >
              send
            </button>
          </div>
          <div className="footer__content__contact__container__contact footer__content__contact__container__sizing">
            <div className="footer__content__contact__container__contact__header">
              <p className="text-white text-2xl italic font-light leading-10 text-left">
                // Lets Colaborate
              </p>
            </div>
            <div className="contact-details">
              <h2 className="text-white text-4xl mt-4 mb-6 font-medium leading-11">
                {name ? name : loadingText}
              </h2>
              <div className="links">
                <Link
                  className="text-white block text-2xl font-medium leading-8 decoration-0"
                  href="tel:9295236682"
                >
                  (929) 523-6682
                </Link>
                <Link
                  className="text-white block text-2xl font-medium leading-8 decoration-0"
                  href={`mailto:${email ? email : loadingText}`}
                >
                  {email ? email : loadingText}
                </Link>
              </div>
            </div>
            <div className="social-media pt-6 pb-2 sm:pt-10">
              <p className="text-md font-semibold">Connect with me on social media!</p>
              <div className="flex flex-wrap gap-x-4 py-0.5">
                <Link
                  className="text-left inline-block"
                  href={linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={linkedInImg} alt="LinkedIn" />
                </Link>
                <Link
                  className="text-left inline-block"
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={instagramImg} alt="Instagram" />
                </Link>
                <Link
                  className="text-left inline-block"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={githubImg} alt="Github" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="footer__content__copyright__container">
          <p>Copyright</p>
          {!user.user && <button onClick={signInWithPopup}>Admin?</button>}
          {user.user && <button onClick={signoutUser}>Signout</button>}
        </div> */}
      </div>
    </div>
  )
}

export default Footer
