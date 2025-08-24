/**
 * Problem: 1493. Longest Subarray of 1's After Deleting One Element
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the length of the longest subarray with at most one zero
 *
 * @param {number[]} nums - Array of 0s and 1s
 *
 * @returns {number} - Length of the longest subarray
 */
const longestSubarray = (nums) => {
  // Initialize the index of the last encountered zero to -1 (none found yet)
  let lastZeroIdx = -1
  // Initialize the left pointer of the sliding window
  let left = 0
  // Initialize the result to store the maximum length found
  let maxLength = 0

  // Iterate through the array with the right pointer
  for (let right = 0; right < nums.length; right++) {
    // Check if the current element is zero
    if (nums[right] === 0) {
      // If a zero was previously found
      if (lastZeroIdx > -1) {
        // Update the maximum length (excluding one zero)
        maxLength = Math.max(maxLength, right - left - 1)
        // Move the left pointer to one position after the previous zero
        left = lastZeroIdx + 1
      }
      // Update the index of the last encountered zero
      lastZeroIdx = right
    }
  }

  // Return the maximum length found, considering the last window
  return Math.max(maxLength, nums.length - left - 1)
}
