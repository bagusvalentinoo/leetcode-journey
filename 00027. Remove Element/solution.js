/**
 * Problem: 27. Remove Element
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Removes all instances of a value from an array in-place
 *
 * @param {number[]} nums - Input array
 * @param {number} val - Value to remove
 *
 * @returns {number} - New length of array after removal
 */
const removeElement = (nums, val) => {
  // Initialize position counter for the new array
  let newLength = 0

  // Iterate through all elements in the array
  for (let i = 0; i < nums.length; i++)
    // If current element is not the value to remove
    if (nums[i] !== val) {
      // Place element at the current position in the result
      nums[newLength] = nums[i]
      // Increment the position counter
      newLength++
    }

  // Return the new length after removal
  return newLength
}
