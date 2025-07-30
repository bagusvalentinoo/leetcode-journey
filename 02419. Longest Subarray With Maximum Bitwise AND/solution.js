/**
 * Problem: 2419. Longest Subarray With Maximum Bitwise AND
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

/**
 * Returns the length of the longest contiguous subarray of maximum values
 *
 * @param {number[]} nums - Array of numbers
 * @returns {number} - Length of the longest subarray of max values
 */
const longestSubarray = (nums) => {
  // Initialize the variable to store the maximum length found so far
  let maxLength = 1

  // Find the maximum value in the array
  const maxValue = Math.max(...nums)

  // Temporary variable to count the current streak of max values
  let currentStreak = 0

  // Iterate through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element equals the maximum value, increment the streak
    if (nums[i] === maxValue) currentStreak++
    // If not, update maxLength if currentStreak is greater, then reset currentStreak
    else {
      maxLength = Math.max(maxLength, currentStreak)
      currentStreak = 0
    }
  }

  // After the loop, ensure the last streak is considered
  maxLength = Math.max(maxLength, currentStreak)

  // Return the length of the longest contiguous subarray of max values
  return maxLength
}
