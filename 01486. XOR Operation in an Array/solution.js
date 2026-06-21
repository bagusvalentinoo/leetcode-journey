/**
 * Problem: 1486. XOR Operation in an Array
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates XOR of array of length n: [start, start+2, start+4, ...]
 *
 * @param {number} n - Length of the array
 * @param {number} start - Starting value
 *
 * @returns {number} XOR of all elements
 */
const xorOperation = (n, start) => {
  // Initialize result with first element
  let xorResult = start

  // XOR all subsequent elements (start + 2 * i)
  for (let i = 1; i < n; i++) xorResult ^= start + 2 * i

  // Return the final XOR result
  return xorResult
}
