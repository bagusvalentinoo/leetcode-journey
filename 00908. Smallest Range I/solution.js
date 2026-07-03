/**
 * Problem: 908. Smallest Range I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the minimum score of nums after applying the operation
 *
 * @param {number[]} nums - The input array of integers
 * @param {number} k - The allowed range for modification
 *
 * @returns {number} The minimum score of nums
 */
const smallestRangeI = (nums, k) => {
  // Find maximum and minimum values in the array
  const maxValue = Math.max(...nums),
    minValue = Math.min(...nums)

  // Calculate adjusted values after applying ±k operation
  const adjustedMax = maxValue - k,
    adjustedMin = minValue + k

  // If adjusted range overlaps, score is 0; otherwise return difference
  return adjustedMin >= adjustedMax ? 0 : adjustedMax - adjustedMin
}
