/**
 * Problem: 1480. Running Sum of 1d Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates running sum of an array
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number[]} Running sum array
 */
const runningSum = (nums) => {
  // Initialize output array with same length as input
  let runningSumArray = new Array(nums.length)

  // First element remains unchanged
  runningSumArray[0] = nums[0]

  // Calculate running sum for remaining elements
  for (let index = 1; index < nums.length; index++)
    // Add current element to previous running sum
    runningSumArray[index] = runningSumArray[index - 1] + nums[index]

  // Return the running sum array
  return runningSumArray
}
