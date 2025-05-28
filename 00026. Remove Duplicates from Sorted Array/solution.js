/**
 * Problem: 26. Remove Duplicates from Sorted Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Removes duplicates from a sorted array in-place
 *
 * @param {number[]} nums - Sorted integer array
 *
 * @returns {number} - Length of array after removing duplicates
 */
const removeDuplicates = (nums) => {
  // Pointer to track position for placing next unique element
  let uniqueIndex = 0

  // Iterate through the array except the last element
  for (let i = 0; i < nums.length - 1; i++)
    // If current unique element is different from the next element
    if (!(nums[uniqueIndex] === nums[i + 1])) {
      // Place the next unique element right after the current unique element
      nums[uniqueIndex + 1] = nums[i + 1]
      // Move unique pointer forward
      uniqueIndex++
    }

  // Return count of unique elements (pointer position + 1)
  return uniqueIndex + 1
}
