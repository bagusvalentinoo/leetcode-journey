/**
 * Problem: 2309. Greatest English Letter in Upper and Lower Case
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds greatest uppercase letter appearing in both lowercase and uppercase
 *
 * @param {string} s - Input string of English letters
 *
 * @returns {string} Greatest English letter in uppercase, or empty string
 */
const greatestLetter = (s) => {
  // Store all unique characters in string
  const seen = new Set(s)

  // Check uppercase letters in reverse order from 'Z' down to 'A'
  for (let code = 90; code >= 65; code--) {
    // Current uppercase letter
    const upper = String.fromCharCode(code)
    // Corresponding lowercase letter
    const lower = String.fromCharCode(code + 32)

    // Check if both uppercase and lowercase exist
    if (seen.has(upper) && seen.has(lower)) return upper
  }

  // Return empty string if no such letter exists
  return ''
}
