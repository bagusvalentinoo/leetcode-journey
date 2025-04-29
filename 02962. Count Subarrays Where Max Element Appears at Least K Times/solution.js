/**
 * Problem: 2962. Count Subarrays Where Max Element Appears at Least K Times
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

/**
 * Count subarrays where the maximum element appears at least k times
 *
 * @param {number[]} nums - Input array
 * @param {number} k - Minimum occurrence threshold
 *
 * @returns {number} - Count of valid subarrays
 */
const countSubarrays = (nums, k) => {
  let max = 0, // Current maximum element
    maxCount = 0, // Count of maximum elements in the current window
    result = 0, // Count of valid subarrays
    leftNear = 0 // Left pointer for the current window

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // New maximum element found
    const num = nums[i]

    // If the new number is greater than the current maximum
    if (num > max) {
      max = num // Update the maximum
      maxCount = 1 // Reset count of maximum elements
      result = 0 // Count of valid subarrays
      leftNear = 0 // Update left pointer
    }
    // If the new number is equal to the current maximum update count
    else if (num === max) maxCount++

    // If the count of maximum elements is less than k, skip to the next iteration
    if (maxCount < k) continue

    // If the count of maximum elements is equal to k, find the leftmost position
    while (maxCount !== k || nums[leftNear] !== max) {
      // If the leftmost element is the maximum, decrement the count
      if (nums[leftNear] === max) maxCount--

      leftNear++ // Move the left pointer
    }

    // Count valid subarrays
    result += leftNear + 1
  }

  // Return the total count of valid subarrays
  return result
}
