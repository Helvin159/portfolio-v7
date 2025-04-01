// Types
import { Skill } from '@/payload-types'

// Components
import Image from 'next/image'

// Images
import iconAngleUp from '@/assets/images/svg/icon-angle-up.svg'
import CommentTitle from './CommentTitle'

const Skills = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="services max-w-5xl mx-auto py-20 px-8">
      <div className="px-12">
        <CommentTitle title="My Skills" />
      </div>
      <div className="services__blocks flex flex-row flex-wrap justify-between m-0 py-6 px-0 relative">
        {skills?.map((skill: Skill) => (
          <div className="basis-full md:basis-1/2" key={skill.id}>
            <div className="service flex flex-row flex-nowrap justify-start items-center my-4 mx-auto w-full max-w-87.5 min-w-87.5">
              <Image src={iconAngleUp} className="inline-block" alt="Angle Up" />
              <p className="text-white text-5xl font-extralight leading-11 m-0 py-0 px-3.5 inline-block">
                {skill.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
