/**
 * Problem: 1876. Substrings of Size Three with Distinct Characters
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts good substrings of length three with all distinct characters
 *
 * @param {string} s - Input string of lowercase English letters
 *
 * @returns {number} Number of good substrings of length three
 */
const countGoodSubstrings = (s) => {
  // Store count of good substrings
  let goodCount = 0

  // Get string length for loop boundary
  const stringLength = s.length

  // Check each window of three consecutive characters
  for (let i = 0; i + 2 < stringLength; i++) {
    // Read the three characters in current window
    const first = s[i],
      second = s[i + 1],
      third = s[i + 2]

    // Count window when all three characters are pairwise distinct
    if (first !== second && first !== third && second !== third) goodCount++
  }

  // Return total number of good substrings
  return goodCount
}
