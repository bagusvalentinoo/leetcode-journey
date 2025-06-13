/**
 * Problem: 34. Find First and Last Position of Element in Sorted Array
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the first and last position of target in sorted array
 *
 * @param {number[]} nums - Sorted array
 * @param {number} target - Target value
 *
 * @returns {number[]} - [first_index, last_index] or [-1, -1] if not found
 */
const searchRange = (nums, target) => {
  // Helper function to find either the first or last occurrence of target
  const findBound = (isFirst) => {
    // Initialize search boundaries
    let leftBound = 0,
      rightBound = nums.length - 1
    // Track the found index, -1 if not found
    let foundIndex = -1

    while (leftBound <= rightBound) {
      // Calculate middle index to avoid overflow
      const midIndex = Math.floor((leftBound + rightBound) / 2)

      // Target found at middle position
      if (nums[midIndex] === target) {
        foundIndex = midIndex

        // For first occurrence, search left half
        if (isFirst) rightBound = midIndex - 1
        // For last occurrence, search right half
        else leftBound = midIndex + 1
      }
      // Target is greater than middle value, search right half
      else if (nums[midIndex] < target) {
        leftBound = midIndex + 1
      }
      // Target is less than middle value, search left half
      else {
        rightBound = midIndex - 1
      }
    }

    return foundIndex
  }

  // Find first and last occurrences of target
  const firstIndex = findBound(true),
    lastIndex = findBound(false)

  return [firstIndex, lastIndex]
}
