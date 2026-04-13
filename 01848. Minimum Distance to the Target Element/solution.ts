/**
 * Problem: 1848. Minimum Distance to the Target Element
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum distance from start to any occurrence of target
 *
 * @param nums - Input array
 * @param target - Target value to find
 * @param start - Starting index
 *
 * @returns Minimum distance to target
 */
const getMinDistance = (
  nums: number[],
  target: number,
  start: number
): number => {
  // Initialize minimum distance to infinity
  let minDistance: number = Infinity

  // Iterate through the array
  for (let i: number = 0; i < nums.length; i++) {
    // Check if current element matches target
    if (nums[i] === target) {
      // Update minimum distance with absolute difference from start
      minDistance = Math.min(minDistance, Math.abs(i - start))
    }
  }

  // Return minimum distance
  return minDistance
}
