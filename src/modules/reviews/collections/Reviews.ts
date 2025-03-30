// Payload
import type { CollectionConfig } from 'payload'
import nameFieldGroup from '../../../components/fields/name-field-group/name-field-group'
import emailsFieldGroup from '../../../components/fields/emails-field-group'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  fields: [nameFieldGroup(), emailsFieldGroup()],
  hooks: {},
}
