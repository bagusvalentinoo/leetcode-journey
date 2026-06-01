/**
 * Problem: 1374. Generate a String With Characters That Have Odd Counts
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Generates string where at most one char differs
 *
 * @param {number} n - String length
 *
 * @returns {string} Generated string
 */
const generateTheString = (n) => {
  // If n is odd, we can use all 'a's
  if (n % 2 === 1) return 'a'.repeat(n)

  // If n is even, use (n-1) 'a's and one 'b'
  return 'a'.repeat(n - 1) + 'b'
}
