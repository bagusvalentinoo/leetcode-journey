/**
 * Problem: 908. Smallest Range I
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the minimum score of nums after applying the operation
 *
 * @param nums - The input array of integers
 * @param k - The allowed range for modification
 *
 * @returns The minimum score of nums
 */
const smallestRangeI = (nums: number[], k: number): number => {
  // Find maximum and minimum values in the array
  const maxValue: number = Math.max(...nums),
    minValue: number = Math.min(...nums)

  // Calculate adjusted values after applying ±k operation
  const adjustedMax: number = maxValue - k,
    adjustedMin: number = minValue + k

  // If adjusted range overlaps, score is 0; otherwise return difference
  return adjustedMin >= adjustedMax ? 0 : adjustedMax - adjustedMin
}
