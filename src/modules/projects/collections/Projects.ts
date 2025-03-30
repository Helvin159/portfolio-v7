// Payload
import type { CollectionConfig } from 'payload'

// Types
import type { User } from '@/payload-types'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {},
  access: {},
  fields: [
    {
      name: 'title',
      label: 'Project Title',
      type: 'text',
    },
  ],
  hooks: {},
}
