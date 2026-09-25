/**
 * Problem: 1832. Check if the Sentence Is Pangram
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if sentence contains every English letter at least once
 *
 * @param {string} sentence - Lowercase English letters string
 *
 * @returns {boolean} True if sentence is pangram
 */
const checkIfPangram = (sentence) => {
  // Define alphabet boundaries using char codes
  const startCode = 'a'.charCodeAt(0), endCode = 'z'.charCodeAt(0)

  // Check each English letter
  for (let code = startCode; code <= endCode; code++)
    // Return false if letter missing from sentence
    if (sentence.indexOf(String.fromCharCode(code)) === -1) return false

  // All letters present
  return true
}
