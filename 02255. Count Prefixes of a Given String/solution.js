/**
 * Problem: 2255. Count Prefixes of a Given String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts how many strings in words are a prefix of s
 *
 * @param {string[]} words - Array of strings to check
 * @param {string} s - Target string to match prefixes against
 *
 * @returns {number} Number of strings that are a prefix of s
 */
const countPrefixes = (words, s) => {
  // Initialize counter for prefix matches
  let count = 0

  // Check each word against the target string
  for (const word of words) {
    // Increment count if s starts with the current word
    if (s.startsWith(word)) count++
  }

  // Return the total number of prefix matches
  return count
}
