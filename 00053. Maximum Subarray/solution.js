/**
 * Problem: 53. Maximum Subarray
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds maximum sum of contiguous subarray (Kadane's algorithm)
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} Maximum subarray sum
 */
const maxSubArray = (nums) => {
  // Initialize max sum with first element
  let maxSum = nums[0]

  // Initialize current running sum with first element
  let currentSum = nums[0]

  // Iterate through the array starting from index 1
  for (let i = 1; i < nums.length; i++) {
    // Either start new subarray at current element or extend existing subarray
    currentSum = Math.max(nums[i], currentSum + nums[i])
    // Update global maximum sum
    maxSum = Math.max(maxSum, currentSum)
  }

  // Return maximum subarray sum
  return maxSum
}
