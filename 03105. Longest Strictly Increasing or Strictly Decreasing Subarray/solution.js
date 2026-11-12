/**
 * Problem: 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the longest strictly increasing or decreasing contiguous subarray
 *
 * @param {number[]} nums - Array of integers
 *
 * @returns {number} Length of the longest monotonic subarray
 */
const longestMonotonicSubarray = (nums) => {
  // Return immediately when the only element forms the longest subarray
  if (nums.length === 1) return 1

  // Track the current increasing, decreasing, and maximum lengths
  let inc = 1, dec = 1, max = 1

  // Compare each element with its predecessor
  for (let i = 1; i < nums.length; i++) {
    // Extend the increasing sequence and reset the decreasing sequence
    if (nums[i] > nums[i - 1]) {
      inc++
      dec = 1
      max = Math.max(inc, max)
    } else if (nums[i] < nums[i - 1]) {
      // Extend the decreasing sequence and reset the increasing sequence
      dec++
      inc = 1
      max = Math.max(dec, max)
    } else {
      // Reset both sequences when adjacent values are equal
      dec = 1
      inc = 1
    }
  }

  // Return the longest monotonic subarray length
  return max
}
