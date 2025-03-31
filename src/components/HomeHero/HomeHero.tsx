// Components
import Header from './components/Header'
import Statistics from './components/Statistics'
import Image from 'next/image'

// Assets
import minimap from '@/assets/icon-map.png'

const HomeHero = async ({
  headline = "Hi! I'm Helvin Rymer. I'm a full stack developer with 4 years of experience.",
  description = 'Welcome to my hip-hop-inspired portfolio. I enjoy front-end projects and collaborating on art and design. As a developer, I merge my passion for hip-hop with coding to craft visually striking experiences.',
  projectsCompleted = '10',
  experienceYrs = '4',
  awardCount = '1',
  clientCount = '5',
}) => {
  const heroImg =
    'https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/Screenshots%2Fimgs%2FIMG_20160902_144507.JPG?alt=media&token=1c6a76ab-0bf2-482c-8a4b-70711504f6cb'
  return (
    <div className="hero__container bg-dark-gray text-white mx-auto w-full max-w-7xl pt-4 px-20 pb-0">
      <div className="hero__container__location p-0.5">
        <p className="text-xl leading-4 mt-4 pt-5 relative">
          <span>
            <Image className="mt-0 mr-1.5 -mb-1 ml-0" src={minimap} alt="mini-map" />
          </span>
          Methuen, MA USA
        </p>
      </div>
      <div className="hero__container__main">
        <Header headline={headline} description={description} />
        <div className="hero__container__main__img">
          <Image
            className="rounded-b-md block mx-auto max-w-full w-full"
            src={heroImg}
            width={2048}
            height={1365}
            alt="Hero Img"
            loading="lazy"
          />
        </div>
      </div>
      <Statistics
        projectsCompleted={projectsCompleted}
        experienceYrs={experienceYrs}
        awardCount={awardCount}
        clientCount={clientCount}
      />
    </div>
  )
}

export default HomeHero
