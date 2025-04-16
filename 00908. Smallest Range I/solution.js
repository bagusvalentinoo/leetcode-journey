/**
 * Problem: 908. Smallest Range I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the minimum score of nums after applying the operation
 *
 * @param {number[]} nums - The input array of integers
 * @param {number} k - The allowed range for modification
 *
 * @returns {number} - The minimum score of nums
 */
const smallestRangeI = (nums, k) => {
  const maxVal = Math.max(...nums) // Maximum value in nums
  const minVal = Math.min(...nums) // Minimum value in nums

  const adjustedMax = maxVal - k // Adjusted maximum value
  const adjustedMin = minVal + k // Adjusted minimum value

  // Return 0 if no valid subarray exists
  return adjustedMin >= adjustedMax ? 0 : adjustedMax - adjustedMin
}
