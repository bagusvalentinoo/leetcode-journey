/**
 * Problem: 2396. Strictly Palindromic Number
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if number is strictly palindromic in all bases from 2 to n-2
 *
 * @param {number} n - Input integer
 *
 * @returns {boolean} True if strictly palindromic
 */
const isStrictlyPalindromic = (n) => {
  // For any n >= 4, it's impossible to be strictly palindromic
  if (n >= 4) return false

  // For n < 4, check base cases
  // n = 1: true (trivially palindromic)
  // n = 2: true (trivially palindromic)
  // n = 3: true (trivially palindromic)
  return true
}
