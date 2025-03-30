// Payload
import { GlobalConfig } from 'payload'

export const Pages: GlobalConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'pages',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Page Title',
          type: 'text',
        },
      ],
    },
  ],
}
