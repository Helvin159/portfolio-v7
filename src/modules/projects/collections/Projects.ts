// Payload
import type { CollectionConfig } from 'payload'

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
    {
      name: 'url',
      label: 'Link',
      type: 'text',
    },
    {
      name: 'featured',
      label: 'Featured',
      type: 'checkbox',
    },
  ],
  hooks: {},
}
