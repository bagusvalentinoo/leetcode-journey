/**
 * Problem: 930. Binary Subarrays With Sum
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Number of subarrays with sum <= goal
 *
 * @param {number[]} nums - The array of numbers
 * @param {number} goal - The target sum
 *
 * @returns {number} - Number of subarrays with sum <= goal
 */
const atMost = (nums, goal) => {
  // If goal is negative, there are no subarrays with sum <= goal return 0
  if (goal < 0) return 0

  // Initialize count and left pointer
  let count = 0
  let left = 0

  // Iterate over array
  for (let right = 0; right < nums.length; right++) {
    // Update goal by subtracting current element
    goal -= nums[right]

    // Shrink window until goal is non-negative
    while (goal < 0) {
      // Add count of subarrays with sum <= goal
      goal += nums[left]
      left++
    }

    // Add count of subarrays with sum <= goal
    count += right - left + 1
  }

  // Return count of subarrays with sum <= goal
  return count
}

/**
 * Counts the number of subarrays with sum equal to the goal
 *
 * @param {number[]} nums - The binary array
 * @param {number} goal - The target sum
 *
 * @returns {number} - The count of valid subarrays
 */
const numSubarraysWithSum = (nums, goal) =>
  atMost(nums, goal) - atMost(nums, goal - 1)
