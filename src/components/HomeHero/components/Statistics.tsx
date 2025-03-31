import React from 'react'

const Statistics = ({
  projectsCompleted,
  experienceYrs,
  awardCount,
  clientCount,
}: {
  projectsCompleted: string
  experienceYrs: string
  awardCount: string
  clientCount: string
}) => {
  return (
    <div className="hero__container__main__stats flex flex-row justify-around py-20 px-4 lg:items-baseline lg:flex-wrap lg:justify-evenly ">
      <div className="stat my-4 mx-auto w-1/4 lg:w-1/2">
        <div className="stat__copy mx-auto my-0 w-1/2">
          <h3 className="text-5xl font-semibold m-0 text-left">{projectsCompleted}+</h3>
          <p className="text-xl font-light mx-auto my-0 text-left">Projects completed</p>
        </div>
      </div>
      <div className="stat my-4 mx-auto w-1/4 lg:w-1/2">
        <div className="stat__copy mx-auto my-0 w-1/2">
          <h3 className="text-5xl font-semibold m-0 text-left">{experienceYrs}+</h3>
          <p className="text-xl font-light mx-auto my-0 text-left">Years of experience</p>
        </div>
      </div>
      <div className="stat my-4 mx-auto w-1/4 lg:w-1/2">
        <div className="stat__copy mx-auto my-0 w-1/2">
          <h3 className="text-5xl font-semibold m-0 text-left">{awardCount}</h3>
          <p className="text-xl font-light mx-auto my-0 text-left">Professional Awards</p>
        </div>
      </div>
      <div className="stat my-4 mx-auto w-1/4 lg:w-1/2">
        <div className="stat__copy mx-auto my-0 w-1/2">
          <h3 className="text-5xl font-semibold m-0 text-left">{clientCount}</h3>
          <p className="text-xl font-light mx-auto my-0 text-left">Satisfied Clients</p>
        </div>
      </div>
    </div>
  )
}

export default Statistics
