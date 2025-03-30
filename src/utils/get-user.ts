import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function getUser() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user, permissions } = await payload.auth({ headers })

  if (!user) {
    // @todo This may have been causing my local machine to go on
    // unlimited redirects
    // redirect('/')
  }

  return { user, permissions }
}
