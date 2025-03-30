// Payload
import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  fields: [
    {
      name: 'title',
      label: 'Skill Title',
      type: 'text',
    },
  ],
  hooks: {},
}
