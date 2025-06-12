/**
 * Problem: 3423. Maximum Difference Between Adjacent Elements in a Circular Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find max absolute difference between adjacent elements in circular array
 *
 * @param {number[]} nums - Circular array of integers
 *
 * @returns {number} - Max absolute difference
 */
const maxAdjacentDistance = (nums) => {
  const n = nums.length
  // Initialize max difference with the circular connection (last to first element)
  let maxDiff = Math.abs(nums[0] - nums[n - 1])

  // Check all adjacent pairs in the array
  for (let i = 0; i < n - 1; i++)
    maxDiff = Math.max(maxDiff, Math.abs(nums[i] - nums[i + 1]))

  return maxDiff
}
