/**
 * Problem: 2089. Find Target Indices After Sorting Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find target indices after sorting without modifying the input array
 *
 * @param {number[]} nums - Array of integers
 * @param {number} target - Value to locate
 *
 * @returns {number[]} Indices of the target in sorted order
 */
const targetIndices = (nums, target) => {
  // Count values that appear before and equal to the target after sorting
  let smallerCount = 0
  let targetCount = 0

  // Inspect every value to determine the target's sorted range
  for (const number of nums) {
    if (number < target) smallerCount++
    if (number === target) targetCount++
  }

  // Store each index occupied by the target values
  const indices = []

  // Add the consecutive indices that start after smaller values
  for (let index = 0; index < targetCount; index++)
    indices.push(smallerCount + index)

  // Return the target indices in increasing order
  return indices
}
