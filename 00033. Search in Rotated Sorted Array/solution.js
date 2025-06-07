/**
 * Problem: 33. Search in Rotated Sorted Array
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Search for target in rotated sorted array
 *
 * @param {number[]} nums - The rotated sorted array
 * @param {number} target - Value to search for
 *
 * @returns {number} - Index of target or -1 if not found
 */
const search = (nums, target) => {
  // Initialize pointers for binary search
  let start = 0,
    end = nums.length - 1

  while (start <= end) {
    // Calculate middle index
    const middle = Math.floor((start + end) / 2)

    // Return if target is found
    if (nums[middle] === target) return middle
    // Check if left side is sorted
    if (nums[start] <= nums[middle]) {
      // Check if target is in the sorted left half
      if (nums[start] <= target && target < nums[middle]) end = middle - 1
      else start = middle + 1
    } else {
      // Check if target is in the sorted right half
      if (nums[middle] < target && target <= nums[end]) start = middle + 1
      else end = middle - 1
    }
  }

  // Target not found
  return -1
}
