/**
 * Problem: 58. Length of Last Word
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the length of the last word in a string
 *
 * @param {string} s - Input string
 *
 * @returns {number} Length of the last word
 */
const lengthOfLastWord = (s) => {
  // Initialize counter for word length
  let length = 0

  // Start from the end of the string
  let i = s.length - 1

  // Skip trailing spaces
  while (i >= 0 && s[i] === ' ') i--
  // Count characters of the last word
  while (i >= 0 && s[i] !== ' ') {
    // Increment length counter
    length++
    // Decrement index
    i--
  }

  return length
}
