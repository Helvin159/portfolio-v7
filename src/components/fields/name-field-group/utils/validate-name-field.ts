/**
 *  Validates name fields. Checks that name field is of type string with a minimum
 *  of 2 characters, max of 30 characters and regex validation.
 *
 *
 *  @param {unknown} value - Value typed in by user in the field
 *  @returns {true | string} - Returns true if string is valid; Returns a string
 *  noting the error and requirements if not valid.
 */
export default function validateNameField(value: unknown) {
  if (typeof value !== 'string') return 'Value must be a string'

  const trimmedValue = value.trim()

  if (trimmedValue.length < 2) {
    return 'Name must be at least 2 characters long.'
  }

  if (trimmedValue.length > 30) {
    return 'Name must be no more than 30 characters long.'
  }
  // Regular expression to allow only alphabetic characters and spaces
  const nameRegex = /^[a-zA-Z\s]+$/

  if (!nameRegex.test(trimmedValue)) {
    return 'Name can only contain alphabetic characters and spaces.'
  }

  return true
}
