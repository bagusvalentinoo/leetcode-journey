/**
 * Problem: 1015. Smallest Integer Divisible by K
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the length of the smallest positive integer consisting only of 1's that is divisible by k
 *
 * @param {number} k - A positive integer
 *
 * @returns {number} - Length of the smallest such integer, or -1 if none exists
 */
const smallestRepunitDivByK = (k) => {
  // Numbers divisible by 2 or 5 can't have a representation with only 1's
  if (k % 2 === 0 || k % 5 === 0) return -1

  // Initialize remainder to track modulo operations
  let remainder = 0

  // Loop up to k times (maximum possible length due to pigeonhole principle)
  for (let length = 1; length <= k; length++) {
    // Calculate new remainder after appending a '1' digit
    remainder = (remainder * 10 + 1) % k

    // If remainder becomes 0, we found a multiple of k
    if (remainder === 0) return length
  }

  // No solution found
  return -1
}
