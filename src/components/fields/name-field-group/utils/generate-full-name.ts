/**
 *  beforeValidate hook function. Takes data from submitted fields, constructs a
 *  full name, and populates the name.full field.
 *
 *  Expects field group under name.
 *
 *  @param param
 *  @returns {Partial<any> | undefined}
 */
export default function generateFullName({
  data,
}: {
  // eslint-disable-next-line
  data: Partial<any> | undefined
  // eslint-disable-next-line
}): Partial<any> | undefined {
  if (data && data.name) {
    const { first, middle, last, suffix } = data.name

    // Check if first and last name are present
    if (!first || !last) {
      return data
    }

    // Start building fullName string
    let fullName = first.trim()

    // If middleName exists, add the middleName to the fullName string
    if (middle) {
      fullName += ` ${middle.trim()}`
    }

    // Add lastName to fullName string
    fullName += ` ${last.trim()}`

    // If a suffix is included, add the suffix to the fullName string
    if (suffix) {
      fullName += `, ${suffix.trim()}`
    }

    // Set fullName to fullName
    data.name.full = fullName
  }

  // Return data
  return
}
