/**
 * Problem: 2016. Maximum Difference Between Increasing Elements
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the maximum difference between two elements where the smaller element is before the larger one
 *
 * @param {number[]} nums - The input array of numbers
 *
 * @returns {number} - The maximum difference or -1 if no valid pair exists
 */
const maximumDifference = (nums) => {
  // Initialize maximum difference to -1 (no valid pair found)
  let maxDiff = -1
  // Track the minimum value seen so far
  let minValue = nums[0]

  // Iterate through array starting from second element
  for (let j = 1; j < nums.length; j++)
    // Check if current element can form a valid increasing pair
    if (nums[j] > minValue) maxDiff = Math.max(maxDiff, nums[j] - minValue)
    // Update minimum value if current element is smaller
    else minValue = nums[j]

  return maxDiff
}
