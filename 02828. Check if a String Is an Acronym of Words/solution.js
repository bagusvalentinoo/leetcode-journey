/**
 * Problem: 2828. Check if a String Is an Acronym of Words
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if string is acronym formed by first letters of words
 *
 * @param {string[]} words - Array of words
 * @param {string} s - Target string to compare
 *
 * @returns {boolean} True if s matches acronym of words
 */
const isAcronym = (words, s) => {
  // If number of words doesn't match string length, it can't be an acronym
  if (words.length !== s.length) return false

  // Compare each character of s with first letter of corresponding word
  for (let i = 0; i < words.length; i++) {
    // If characters don't match, return false immediately
    if (words[i][0] !== s[i]) return false
  }

  // All characters matched, valid acronym
  return true
}
