/**
 * Problem: 1003. Check If Word Is Valid After Substitutions
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if string is valid by removing "abc" sequences until empty
 *
 * @param {string} s - Input string
 *
 * @returns {boolean} - True if valid, false otherwise
 */
const isValid = (s) => {
  // Initialize cleanedString by removing all 'abc' sequences from input
  let cleanedString = s.split('abc').join('')

  // Continue removing 'abc' sequences until no more changes can be made
  while (cleanedString.length < s.length) {
    s = cleanedString
    cleanedString = s.split('abc').join('')
  }

  // Return true only if all characters were removed (valid string)
  return s.length === 0
}
