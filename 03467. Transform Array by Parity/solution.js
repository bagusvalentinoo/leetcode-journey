/**
 * Problem: 3467. Transform Array by Parity
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Replaces evens with 0, odds with 1 and sorts
 *
 * @param {number[]} nums - Input array
 *
 * @returns {number[]} Sorted array of 0s and 1s
 */
const transformArray = (nums) => {
  // Iterate through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // If number is even, replace with 0
    if (nums[i] % 2 === 0) nums[i] = 0
    // If number is odd, replace with 1
    else nums[i] = 1
  }

  // Sort the transformed array and return
  return nums.sort((a, b) => a - b)
}
