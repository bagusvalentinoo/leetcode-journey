/**
 * Problem: 1389. Create Target Array in the Given Order
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Creates target array by inserting nums[i] at position index[i]
 *
 * @param {number[]} nums - Array of values to insert
 * @param {number[]} index - Array of insertion positions
 *
 * @returns {number[]} Resulting target array after all insertions
 */
const createTargetArray = (nums, index) => {
  // Initialize empty target array
  const targetArray = []

  // Iterate through each element and insert at specified index
  for (let i = 0; i < nums.length; i++) targetArray.splice(index[i], 0, nums[i])

  // Return the final target array after all insertions
  return targetArray
}
