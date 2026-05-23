/**
 * Problem: 1752. Check if Array Is Sorted and Rotated
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if array can be made non-decreasing with at most one rotation
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {boolean} True if array can be sorted with ≤1 rotation
 */
const check = (nums) => {
  // Counter for breaks where current element is greater than next
  let breakCount = 0
  // Length of the input array
  const arrayLength = nums.length

  // Iterate through each element and compare with next (circular)
  for (let currentIndex = 0; currentIndex < arrayLength; currentIndex++) {
    // Check if current element is greater than next element (wrap around at end)
    if (nums[currentIndex] > nums[(currentIndex + 1) % arrayLength])
      breakCount++
  }

  // Array is valid if there is at most one break point
  return breakCount <= 1
}
