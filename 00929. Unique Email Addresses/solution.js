/**
 * Problem: 929. Unique Email Addresses
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 99.76%)
 */

/**
 * Return the number of unique emails after processing according to the rules
 *
 * @param {string[]} emails - The array of email addresses
 *
 * @returns {number} - The count of unique email addresses
 */
const numUniqueEmails = (emails) => {
  // Store the unique email addresses
  const result = []

  // Process each email address
  emails?.map((item) => {
    // Find the position of '@' in the email address
    const pointer = item.indexOf('@')
    // Store the local name of the email address
    let emailLocalName = ''
    // Store the suffix of the email address
    const suff = item.slice(pointer)

    // Extract the local name of the email address
    for (let i = 0; i < item.length; i++)
      // If the character is '+' or '@', break the loop
      if (item[i] === '+' || item[i] === '@') break
      // If the character is not '.', append it to the local name
      else if (item[i] !== '.') emailLocalName += item[i]

    // Combine the local name and suffix
    const semiRes = emailLocalName + suff

    // Add the email address to the result if it is not already present
    if (result.indexOf(semiRes) === -1) result.push(semiRes)
  })

  // Return the count of unique email addresses
  return result.length
}
