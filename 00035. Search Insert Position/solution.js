/**
 * Problem: 35. Search Insert Position
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the insertion index for a target value in a sorted array
 *
 * @param {number[]} nums - Sorted array of distinct integers
 * @param {number} target - Target value to insert
 *
 * @returns {number} - Index where target should be inserted
 */
const searchInsert = (nums, target) => {
  // Initialize search boundaries
  let leftIndex = 0,
    rightIndex = nums.length - 1

  while (leftIndex <= rightIndex) {
    // Calculate middle index to avoid overflow
    const midIndex = Math.floor((leftIndex + rightIndex) / 2)

    // Found target, return its index
    if (nums[midIndex] === target) return midIndex
    // Target is greater, search right half
    if (nums[midIndex] < target) leftIndex = midIndex + 1
    // Target is smaller, search left half
    else rightIndex = midIndex - 1
  }

  // Return insertion position
  return leftIndex
}
