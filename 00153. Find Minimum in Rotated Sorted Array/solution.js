/**
 * Problem: 153. Find Minimum in Rotated Sorted Array
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum element in rotated sorted array
 *
 * @param {number[]} nums - Rotated sorted array
 *
 * @returns {number} Minimum element in the array
 */
const findMin = (nums) => {
  // Initialize left and right pointer to start and end of array
  let leftPointer = 0
  let rightPointer = nums.length - 1

  // Binary search to find the minimum element
  while (leftPointer < rightPointer) {
    // Calculate middle index
    const middleIndex = Math.floor((leftPointer + rightPointer) / 2)

    // If middle element is greater than rightmost element,
    // minimum is in the right half
    if (nums[middleIndex] > nums[rightPointer]) leftPointer = middleIndex + 1
    // Otherwise, minimum is in the left half (including middle)
    else rightPointer = middleIndex
  }

  // Return the minimum element
  return nums[leftPointer]
}
