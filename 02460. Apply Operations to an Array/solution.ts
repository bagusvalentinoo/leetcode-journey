/**
 * Problem: 2460. Apply Operations to an Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Apply adjacent operations and move zeros to the end
 *
 * @param nums - Array of non-negative integers
 *
 * @returns Resulting array
 */
const applyOperations = (nums: number[]): number[] => {
  // Store the array length for loop boundaries
  let n: number = nums.length

  // Apply each adjacent operation sequentially
  for (let i: number = 0; i < n - 1; i++) {
    // Double equal adjacent values and clear the right value
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
    }
  }

  // Track the next position for a non-zero value
  let pos: number = 0

  // Move non-zero values to the front in their original order
  for (let i: number = 0; i < n; i++) {
    if (nums[i] !== 0) nums[pos++] = nums[i]
  }

  // Fill the remaining positions with zeros
  while (pos < n) nums[pos++] = 0

  // Return the transformed array
  return nums
}
