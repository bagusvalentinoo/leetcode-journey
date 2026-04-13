/**
 * Problem: 1848. Minimum Distance to the Target Element
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum distance from start to any occurrence of target
 *
 * @param {number[]} nums - Input array
 * @param {number} target - Target value to find
 * @param {number} start - Starting index
 *
 * @returns {number} Minimum distance to target
 */
const getMinDistance = (nums, target, start) => {
  // Initialize minimum distance to infinity
  let minDistance = Infinity

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Check if current element matches target
    if (nums[i] === target) {
      // Update minimum distance with absolute difference from start
      minDistance = Math.min(minDistance, Math.abs(i - start))
    }
  }

  // Return minimum distance
  return minDistance
}
