// Payload
import { Field, GroupField } from 'payload'

// Utils
import validateNameField from '@/components/fields/name-field-group/utils/validate-name-field'
import generateFullName from '@/components/fields/name-field-group/utils/generate-full-name'

interface NameFieldGroupParamsType {
  fieldName?: string
  fieldLabel?: string
  additionalFields?: [Field] | null | undefined
}

/**
 *  Generates name field group.
 *
 *  @param {string} fieldName - Optional param for custom label, defaults to 'Names'.
 *  @param {string} fieldLabel - Optional param for custom label, defaults to 'Names'.
 *  @param {[Field]} additionalFields - Optional param for additional fields, defaults to null.
 *
 *  @returns {GroupField} - Returns a custom 'name' GroupField type.
 */
export default function nameFieldGroup({
  fieldName = 'name',
  fieldLabel = 'Names',
  additionalFields = null,
}: NameFieldGroupParamsType = {}): GroupField {
  fieldName = 'name'
  const fieldGroup: GroupField = {
    name: fieldName,
    label: fieldLabel ?? false,
    type: 'group',
    fields: [
      {
        name: 'first',
        label: 'First Name',
        validate: validateNameField,
        type: 'text',
        required: true,
      },
      {
        name: 'middle',
        label: 'Middle Name',
        type: 'text',
        required: false,
        admin: {
          width: '20%',
        },
      },
      {
        name: 'last',
        label: 'Last Name',
        type: 'text',
        validate: validateNameField,
        required: true,
      },
      {
        name: 'suffix',
        label: 'Suffix',
        type: 'select',
        admin: {
          width: '20%',
        },
        options: [
          { label: 'Jr.', value: 'Junior' },
          { label: 'Sr.', value: 'Senior' },
          { label: 'I', value: 'I' },
          { label: 'II', value: 'II' },
          { label: 'III', value: 'III' },
          { label: 'IV', value: 'IV' },
          { label: 'V', value: 'V' },
          { label: 'USA', value: 'United States Army' },
          { label: 'USN', value: 'United States Navy' },
          { label: 'USAF', value: 'United States Air Force' },
          { label: 'USMC', value: 'United States Marine Corps' },
          { label: 'USCG', value: 'United States Coast Guard' },
          { label: 'Ret.', value: 'Retired' },
          { label: 'Ph.D.', value: 'Ph.D.' },
          { label: 'M.D.', value: 'M.D.' },
          { label: 'Esq.', value: 'Esq.' },
          { label: 'CPA', value: 'Certified Public Accountant' },
          { label: 'DDS', value: 'Doctor of Dental Surgery' },
          { label: 'DVM', value: 'Doctor of Veterinary Medicine' },
          { label: 'Ed.D.', value: 'Doctor of Education' },
          { label: 'MBA', value: 'Master of Business Administration' },
          { label: 'MS', value: 'Masters of Science' },
        ],
        required: false,
      },
      {
        name: 'preferred',
        label: 'Preferred Name',
        type: 'text',
        required: false,
      },
      {
        name: 'full',
        label: 'Full Name',
        type: 'text',
        required: false,
        admin: { readOnly: true },
      },
    ],
    hooks: {
      beforeValidate: [({ data }): unknown => generateFullName({ data })],
    },
  }

  // If additional fields are added, push to address.fields
  if (additionalFields) {
    fieldGroup.fields.push(...additionalFields)
  }

  return fieldGroup
}
