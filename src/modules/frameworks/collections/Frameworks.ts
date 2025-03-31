// Payload
import type { CollectionConfig } from 'payload'

export const Frameworks: CollectionConfig = {
  slug: 'frameworks',
  fields: [
    {
      name: 'title',
      label: 'Framework Title',
      type: 'text',
    },
  ],
  hooks: {},
}
