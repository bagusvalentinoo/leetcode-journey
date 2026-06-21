/**
 * Problem: 1486. XOR Operation in an Array
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates XOR of array of length n: [start, start+2, start+4, ...]
 *
 * @param n - Length of the array
 * @param start - Starting value
 *
 * @returns XOR of all elements
 */
const xorOperation = (n: number, start: number): number => {
  // Initialize result with first element
  let xorResult: number = start

  // XOR all subsequent elements (start + 2 * i)
  for (let i: number = 1; i < n; i++) xorResult ^= start + 2 * i

  // Return the final XOR result
  return xorResult
}
