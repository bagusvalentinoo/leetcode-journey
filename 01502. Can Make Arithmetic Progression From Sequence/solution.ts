/**
 * Problem: 1502. Can Make Arithmetic Progression From Sequence
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if array can be rearranged into an arithmetic progression
 *
 * @param arr - Input array of integers
 *
 * @returns True if array can form an arithmetic progression
 */
const canMakeArithmeticProgression = (arr: number[]): boolean => {
  // Sort array to arrange elements in ascending order
  arr.sort((a: number, b: number) => a - b)

  // Calculate common difference from first two elements
  const commonDifference: number = arr[1] - arr[0]

  // Check if every consecutive pair has the same difference
  for (let i: number = 2; i < arr.length; i++)
    // If any difference differs, it cannot form an arithmetic progression
    if (arr[i] - arr[i - 1] !== commonDifference) return false

  // All differences match, array forms an arithmetic progression
  return true
}
