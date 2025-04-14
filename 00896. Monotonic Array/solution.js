/**
 * Problem: 896. Monotonic Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines whether an array is monotonic
 *
 * @param {number[]} nums - The input array of integers
 *
 * @returns {boolean} - True if the array is monotonic, false otherwise
 */
const isMonotonic = (nums) => {
  // Initialize variables
  let ans = true

  // Check if the array is increasing
  if (nums[0] <= nums[nums.length - 1]) {
    // Iterate through the array
    for (let i = 0; i < nums.length - 1; i++) {
      // Check if the array is increasing
      if (nums[i] > nums[i + 1]) {
        ans = false
        break
      }
    }
  }

  // Check if the array is decreasing
  if (nums[0] >= nums[nums.length - 1]) {
    // Iterate through the array
    for (let i = 0; i < nums.length - 1; i++) {
      // Check if the array is decreasing
      if (nums[i] < nums[i + 1]) {
        ans = false
        break
      }
    }
  }

  return ans
}
