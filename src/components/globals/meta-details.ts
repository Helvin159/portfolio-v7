// Payload
import { GlobalConfig } from 'payload'

export const MetaDetails: GlobalConfig = {
  slug: 'meta-details',
  fields: [
    {
      name: 'title',
      label: 'Meta Title',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Meta Description',
      type: 'text',
    },
    {
      name: 'metaOgDetails',
      type: 'group',
      fields: [
        {
          name: 'image',
          type: 'text',
        },
      ],
    },
  ],
}
