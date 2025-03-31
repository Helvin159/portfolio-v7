// Payload
import type { CollectionConfig } from 'payload'

export const Languages: CollectionConfig = {
  slug: 'languages',
  fields: [
    {
      name: 'title',
      label: 'Language Title',
      type: 'text',
    },
  ],
  hooks: {},
}
