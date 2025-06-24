/**
 * Problem: 2200. Find All K-Distant Indices in an Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find all indices that are k-distance away from the key in the array
 *
 * @param {number[]} nums - Array of numbers
 * @param {number} key - Key number to find in the array
 * @param {number} k - Distance parameter
 *
 * @returns {number[]} - Array of indices that are k-distance away from the key
 */
const findKDistantIndices = (nums, key, k) => {
  // Result array to store k-distant indices
  const result = []
  // Right boundary pointer for the current range
  let rightBoundary = 0
  // Total length of the input array
  const arrayLength = nums.length

  // Iterate through each element to find keys
  for (let index = 0; index < arrayLength; ++index) {
    if (nums[index] === key) {
      // Calculate left boundary of k-distance range
      const leftBoundary = Math.max(rightBoundary, index - k)

      // Update right boundary for next iteration
      rightBoundary = Math.min(arrayLength - 1, index + k) + 1

      // Add all indices in the k-distance range to result
      for (let i = leftBoundary; i < rightBoundary; ++i) result.push(i)
    }
  }

  return result
}
