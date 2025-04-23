/**
 * Problem: 918. Maximum Sum Circular Subarray
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Maximum sum of a non-empty circular subarray
 *
 * @param {number[]} nums - The circular array
 *
 * @returns {number} - Max sum of a non-empty subarray
 */
const maxSubarraySumCircular = (nums) => {
  // Initialize max sum
  let maxSum = nums[0]
  let currentMaxSum = 0

  // Initialize min sum
  let minSum = nums[0]
  let currentMinSum = 0

  // Initialize total sum
  let totalSum = 0

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i] // Current number

    // Update current max sum
    currentMaxSum = Math.max(currentMaxSum + num, num)
    maxSum = Math.max(maxSum, currentMaxSum)

    // Update current min sum
    currentMinSum = Math.min(currentMinSum + num, num)
    minSum = Math.min(minSum, currentMinSum)

    // Update total sum
    totalSum += num
  }

  // If max sum is negative, return max sum
  if (maxSum < 0) return maxSum

  // Otherwise, return max sum of non-circular subarray
  return Math.max(maxSum, totalSum - minSum)
}
