// Payload
import { ArrayField, Field } from 'payload'

interface PhonesFieldGroupParamsType {
  fieldName?: string
  fieldLabel?: string
  additionalFields?: [Field] | null | undefined
}

/**
 *  Generates address field group.
 *
 *  @param {string} fieldName - Optional param for custom label, defaults to 'phones'.
 *  @param {string} fieldLabel - Optional param for custom label, defaults to 'Phone Numbers'.
 *  @param {[Field]} additionalFields - Optional param for additional fields, defaults to null.
 *  @returns {ArrayField} - Returns a custom 'phones' ArrayField type.
 */
export default function phonesFieldGroup({
  fieldName = 'phones',
  fieldLabel = 'Phone Numbers',
  additionalFields = null,
}: PhonesFieldGroupParamsType = {}): ArrayField {
  const phonesFieldGroup: ArrayField = {
    name: fieldName,
    type: 'array',
    label: fieldLabel,
    fields: [
      {
        name: 'countryCode',
        type: 'number',
        label: 'Country Code',
      },
      {
        name: 'number',
        type: 'number',
        label: 'Number',
      },
      {
        name: 'type',
        type: 'select',
        label: 'Type',
        options: [
          {
            label: 'Mobile',
            value: 'mobile',
          },
          {
            label: 'Home',
            value: 'home',
          },
          {
            label: 'Work',
            value: 'work',
          },
        ],
      },
      {
        name: 'isPrimary',
        type: 'checkbox',
        label: 'Primary',
      },
      {
        name: 'verified',
        type: 'checkbox',
        label: 'Verified',
        defaultValue: false,
        admin: {
          readOnly: true,
        },
      },
    ],
  }

  // Check if additional fields are included
  if (additionalFields) {
    phonesFieldGroup.fields.push(...additionalFields)
  }

  // Return Field
  return phonesFieldGroup
}
