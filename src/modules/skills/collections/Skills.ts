// Payload
import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    defaultColumns: ['title', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      label: 'Skill Title',
      type: 'text',
    },
    {
      name: 'expirienceYears',
      label: 'Years of experience with this skill?',
      type: 'number',
    },
  ],
  hooks: {},
}
