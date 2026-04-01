/**
 * Problem: 1. Two Sum
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds two indices that sum to target
 *
 * @param {number[]} nums - Input array
 * @param {number} target - Target sum
 *
 * @returns {number[]} Indices of the two numbers
 */
const twoSum = (nums, target) => {
  // Temporary object to store the values and their indices
  let temp = {}

  // Iterate through the array
  for (i = 0; i < nums.length; i += 1) {
    // Current value
    const value = nums[i]

    // If the current value is already in the object, return the indices
    if (temp[value] !== undefined) return [temp[value], i]

    // Calculate the pair value
    const pair = value > 0 ? target - value : target + Math.abs(value)
    // Store the pair value and its index in the object
    temp[pair] = i
  }
}
