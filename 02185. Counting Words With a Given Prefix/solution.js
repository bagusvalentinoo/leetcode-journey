/**
 * Problem: 2185. Counting Words With a Given Prefix
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count words that begin with the given prefix
 *
 * @param {string[]} words - Words to check
 * @param {string} pref - Required prefix
 *
 * @returns {number} Number of matching words
 */
const prefixCount = (words, pref) => {
  // Count words that start with the required prefix
  let count = 0

  // Check every word for the prefix
  for (const word of words) {
    // Increment the count when the word starts with the prefix
    if (word.startsWith(pref)) count++
  }

  // Return the number of matching words
  return count
}
