/**
 * Problem: 1005. Maximize Sum Of Array After K Negations
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Maximizes array sum after k negations
 *
 * @param {number[]} nums - Array of integers
 * @param {number} k - Number of allowed negations
 *
 * @returns {number} - Maximum possible sum
 */
const largestSumAfterKNegations = (nums, k) => {
  // Sort array in ascending order for efficient negation strategy
  nums.sort((a, b) => a - b)

  // First pass: negate negative numbers while we have negations available
  for (let i = 0; i < nums.length && k > 0; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i]
      k--
    }
  }

  // If we have an odd number of negations left, negate the smallest number
  if (k % 2 === 1) {
    const smallestNumIndex = nums.indexOf(Math.min(...nums))
    nums[smallestNumIndex] = -nums[smallestNumIndex]
  }

  // Calculate and return the sum of all elements
  return nums.reduce((total, num) => total + num, 0)
}
