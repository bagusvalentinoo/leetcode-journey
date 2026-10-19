/**
 * Problem: 2057. Smallest Index With Equal Value
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the smallest index whose value equals its last digit
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} Smallest matching index, or -1 when none exists
 */
const smallestEqual = (nums) => {
  // Check each index in ascending order to find the smallest match
  for (let i = 0; i < nums.length; i++) {
    // Return the first index whose last digit equals its value
    if (i % 10 === nums[i]) return i
  }

  // Return -1 when no index satisfies the condition
  return -1
}
