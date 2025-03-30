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
export default function emailsFieldGroup({
  fieldName = 'emails',
  fieldLabel = 'Email Addresses',
  additionalFields = null,
}: PhonesFieldGroupParamsType = {}): ArrayField {
  const emailsFieldGroup: ArrayField = {
    name: fieldName,
    type: 'array',
    label: fieldLabel,
    fields: [
      {
        name: 'email',
        type: 'email',
        label: 'Email Address',
      },
      {
        name: 'type',
        type: 'select',
        label: 'Type',
        options: [
          {
            label: 'Primary',
            value: 'primary',
          },
          {
            label: 'Secondary',
            value: 'secondary',
          },
          {
            label: 'Work',
            value: 'work',
          },
        ],
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
    emailsFieldGroup.fields.push(...additionalFields)
  }

  // Return Field
  return emailsFieldGroup
}
