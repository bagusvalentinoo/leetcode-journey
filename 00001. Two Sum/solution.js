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
 * Finds the indices of the two numbers that add up to the target
 *
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target integer
 *
 * @returns {number[]} - Indices of the two numbers that add up to the target
 */
const twoSum = (nums, target) => {
  let temp = {} // Temporary object to store the values and their indices

  // Iterate through the array
  for (i = 0; i < nums.length; i += 1) {
    const value = nums[i] // Current value

    // If the current value is already in the object, return the indices
    if (temp[value] !== undefined) return [temp[value], i]

    // Calculate the pair value
    const pair = value > 0 ? target - value : target + Math.abs(value)
    // Store the pair value and its index in the object
    temp[pair] = i
  }
}
