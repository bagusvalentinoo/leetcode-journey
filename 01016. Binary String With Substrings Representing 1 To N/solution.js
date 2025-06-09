/**
 * Problem: 1016. Binary String With Substrings Representing 1 To N
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if all binary representations from 1 to n are substrings of s
 *
 * @param {string} s - Binary string to search in
 * @param {number} n - Upper limit (inclusive)
 *
 * @returns {boolean} - True if all binaries are found in s
 */
const queryString = (s, n) => {
  // Check each number from 1 to n
  for (let num = 1; num <= n; num++) {
    // Convert current number to binary representation
    const binaryStr = num.toString(2)

    // Return false if binary representation is not found in string s
    if (!s.includes(binaryStr)) return false
  }

  // All binary representations were found in s
  return true
}
