/**
 * Problem: 960. Delete Columns to Make Sorted III
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Calculates minimum characters to delete to make strings lexicographically sorted
 *
 * @param {string[]} strs - Array of equal-length strings
 *
 * @returns {number} - Minimum deletion count
 */
const minDeletionSize = (strs) => {
  // Get dimensions
  const size = strs.length
  const strLength = strs[0].length
  // Initialize dp array: dp[i] represents length of longest valid subsequence ending at column i
  const dp = Array(strLength).fill(1)

  for (let i = 1; i < strLength; i++) {
    for (let j = 0; j < i; j++) {
      // Check if column j can be placed before column i in sorted order
      let flag = true

      for (let k = 0; k < size; k++) {
        // If any string has larger char in column j than in column i, order is invalid
        if (strs[k][j] > strs[k][i]) {
          flag = false
          break
        }
      }

      // If valid order, update dp with longest sequence
      if (flag) dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }

  // Return number of columns to delete (total - longest valid subsequence)
  return strLength - Math.max(...dp)
}
