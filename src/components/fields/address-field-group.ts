// Payload
import { Field, GroupField } from 'payload'

interface AddressFieldGroupParamsType {
  fieldName?: string
  fieldLabel?: string
  additionalFields?: [Field] | null | undefined
}

/**
 *  Generates address field group.
 *
 *  @param {string} fieldName - Optional param for custom label, defaults to 'address'.
 *  @param {string} fieldLabel - Optional param for custom label, defaults to 'Address'.
 *  @param {[Field]} additionalFields - Optional param for additional fields, defaults to null.
 *  @returns {GroupField} - Returns a custom 'address' GroupField type.
 */
export default function addressFieldGroup({
  fieldName = 'address',
  fieldLabel = 'Address',
  additionalFields = null,
}: AddressFieldGroupParamsType = {}): GroupField {
  // Build address GroupField
  const address: GroupField = {
    name: fieldName,
    label: fieldLabel ?? false,
    type: 'group',
    fields: [
      {
        name: 'line1',
        label: 'Address',
        type: 'text',
        required: false,
      },
      {
        name: 'line2',
        label: 'Address 2',
        type: 'text',
        required: false,
      },
      {
        name: 'postalCode',
        label: 'Postal Code',
        type: 'text',
        required: false,
      },
      {
        name: 'locality',
        label: 'City',
        type: 'text',
        required: false,
      },
      {
        name: 'administrativeArea',
        label: 'State',
        type: 'text',
        required: false,
        maxLength: 2,
      },
      {
        name: 'subAdministtrativeArea',
        label: 'County',
        type: 'text',
        required: false,
      },

      {
        name: 'countryCode',
        label: 'Country',
        type: 'text',
        required: false,
        maxLength: 2,
      },
      {
        name: 'langCode',
        label: 'Language',
        type: 'text',
        required: false,
        admin: {
          disabled: true,
        },
      },
    ],
  }

  // If additional fields are added, push to address.fields
  if (additionalFields) {
    address.fields.push(...additionalFields)
  }

  return address
}
