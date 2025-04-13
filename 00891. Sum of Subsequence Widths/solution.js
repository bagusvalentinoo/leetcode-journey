/**
 * Problem: 891. Sum of Subsequence Widths
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 103 ms (Beats 100%)
 */

/**
 * Returns the sum of divisors of the widths of all non-empty subsequences modulo 10^9 + 7.
 *
 * @param {number[]} nums - Array of integers
 *
 * @returns {number} - Sum of widths of all non-empty subsequences modulo 10^9 + 7
 */
const sumSubseqWidths = (nums) => {
  // Initialize the modulo constant
  const mod = 1e9 + 7

  // Sort the array in ascending order
  nums.sort((a, b) => a - b)

  // Initialize variables
  const n = nums.length
  let result = 0
  let powerOfTwo = 1

  // Iterate through the array
  for (let i = 0; i < n; i++) {
    // Calculate the contribution of the current element
    result =
      (result + nums[i] * powerOfTwo - nums[n - i - 1] * powerOfTwo) % mod

    // Update the power of two
    powerOfTwo = (powerOfTwo * 2) % mod
  }

  // Return the result modulo 10^9 + 7
  return (result + mod) % mod
}
