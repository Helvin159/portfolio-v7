import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import config from '@/payload.config'

// Components
import HomeHero from '@/components/HomeHero/HomeHero'
import Skills from '@/components/Skills'
import { Skill } from '@/payload-types'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const skills: Skill[] = await payload
    .find({
      collection: 'skills',
    })
    .then((data) => data.docs)

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <HomeHero />
      <Skills skills={skills} />
    </>
  )
}
