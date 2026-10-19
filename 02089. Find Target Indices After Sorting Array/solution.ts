/**
 * Problem: 2089. Find Target Indices After Sorting Array
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find target indices after sorting without modifying the input array
 *
 * @param nums - Array of integers
 * @param target - Value to locate
 *
 * @returns Indices of the target in sorted order
 */
const targetIndices = (nums: number[], target: number): number[] => {
  // Count values that appear before and equal to the target after sorting
  let smallerCount: number = 0
  let targetCount: number = 0

  // Inspect every value to determine the target's sorted range
  for (const number of nums) {
    if (number < target) smallerCount++
    if (number === target) targetCount++
  }

  // Store each index occupied by the target values
  const indices: number[] = []

  // Add the consecutive indices that start after smaller values
  for (let index: number = 0; index < targetCount; index++)
    indices.push(smallerCount + index)

  // Return the target indices in increasing order
  return indices
}
