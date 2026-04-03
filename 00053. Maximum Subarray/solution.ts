/**
 * Problem: 53. Maximum Subarray
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds maximum sum of contiguous subarray (Kadane's algorithm)
 *
 * @param nums - Input array of integers
 *
 * @returns Maximum subarray sum
 */
const maxSubArray = (nums: number[]): number => {
  // Initialize max sum with first element
  let maxSum: number = nums[0]

  // Initialize current running sum with first element
  let currentSum: number = nums[0]

  // Iterate through the array starting from index 1
  for (let i: number = 1; i < nums.length; i++) {
    // Either start new subarray at current element or extend existing subarray
    currentSum = Math.max(nums[i], currentSum + nums[i])
    // Update global maximum sum
    maxSum = Math.max(maxSum, currentSum)
  }

  // Return maximum subarray sum
  return maxSum
}
