// Payload
import type { CollectionConfig } from 'payload'

export const PreviousProjects: CollectionConfig = {
  slug: 'previousProjects',
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
  ],
  hooks: {},
}
