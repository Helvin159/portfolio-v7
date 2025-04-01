// Payload
import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    defaultColumns: ['title', 'createdAt'],
  },
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
