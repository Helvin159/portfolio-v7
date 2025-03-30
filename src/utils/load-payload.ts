import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function loadPayload() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  return payload
}
