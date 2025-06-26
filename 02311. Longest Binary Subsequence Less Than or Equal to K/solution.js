/**
 * Problem: 2311. Longest Binary Subsequence Less Than or Equal to K
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the longest binary subsequence with value ≤ k
 *
 * @param {string} s - Binary string
 * @param {number} k - Maximum value
 *
 * @returns {number} - Length of longest valid subsequence
 */
const longestSubsequence = (s, k) => {
  // Initialize the length of valid subsequence and current binary value
  let maxLength = 0,
    currentValue = 0
  const stringLength = s.length

  // Iterate from right to left to build subsequence
  for (let i = stringLength - 1; i >= 0; i--) {
    // If current bit is '1' and adding it doesn't exceed k
    if (s[i] === '1' && currentValue + Math.pow(2, stringLength - 1 - i) <= k) {
      // Add the bit value and increment length
      currentValue += Math.pow(2, stringLength - 1 - i)
      maxLength++
    } else if (s[i] === '0') {
      // Always include '0' bits as they don't increase value
      maxLength++
    }
  }

  return maxLength
}
