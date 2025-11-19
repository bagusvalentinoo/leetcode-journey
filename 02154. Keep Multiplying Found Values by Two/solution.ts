/**
 * Problem: 2154. Keep Multiplying Found Values by Two
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Doubles the original until not in nums
 *
 * @param nums - Input array
 * @param original - Initial value
 *
 * @returns - Resulting value
 */
const keepMultiplying = (nums: number[], original: number): number => {
  // Use a while loop to repeatedly check if `original` exists in the `nums` array.
  while (nums.includes(original))
    // If `original` is found in `nums`, multiply it by 2.
    original *= 2

  // Return the final value of `original` after the loop ends.
  return original
}
