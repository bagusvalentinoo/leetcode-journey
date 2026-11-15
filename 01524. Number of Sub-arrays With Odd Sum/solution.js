/**
 * Problem: 1524. Number of Sub-arrays With Odd Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count subarrays whose sum is odd
 *
 * @param {number[]} arr - Input array of integers
 *
 * @returns {number} Number of odd-sum subarrays modulo 10^9 + 7
 */
const numOfSubarrays = (arr) => {
  // Count prefix sums with odd parity using a mutable running sum
  let sum = 0
  const odd = arr.reduce((count, number) => count + ((sum += number) & 1), 0)

  // Count even prefix sums, including the empty prefix sum
  const even = arr.length + 1 - odd

  // Odd-sum subarrays pair one odd prefix sum with one even prefix sum
  return (odd * even) % 1_000_000_007
}
