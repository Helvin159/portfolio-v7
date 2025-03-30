// Payload
import type { CollectionConfig } from 'payload'

// Components
import nameFieldGroup from '@/components/fields/name-field-group/name-field-group'
import addressFieldGroup from '@/components/fields/address-field-group'
import emailsFieldGroup from '@/components/fields/emails-field-group'
import phonesFieldGroup from '@/components/fields/phones-field-group'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [nameFieldGroup(), addressFieldGroup(), emailsFieldGroup(), phonesFieldGroup()],
}
