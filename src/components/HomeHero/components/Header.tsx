import React from 'react'

const Header = ({ headline, description }: { headline: string; description: string }) => {
  const defaultHeadline = 'i am a hip-hop loving front-end developer with 2+ years of experience.'

  const defaultDescription =
    'Explore my hip-hop-inspired portfolio, where front-end projects seamlessly blend with art and design collaborations. As a developer, I fuse my love for hip-hop with coding expertise to create visually stunning experiences.'
  return (
    <div className="hero__container__main__header flex flex-col lg:flex-row items-center justify-between m-0 pb-1">
      <h1 className="text-white text-2xl sm:text-6xl font-semibold leading-10 sm:leading-16 pr-4 uppercase text-center lg:text-left lg:pr-0">
        {headline ? headline : defaultHeadline}
      </h1>
      <p className="text-lg font-light text-white text-center lg:text-left leading-5 pb-8 w-full max-w-full lg:max-w-3/4 self-end mx-auto">
        {description ? description : defaultDescription}
      </p>
    </div>
  )
}

export default Header
