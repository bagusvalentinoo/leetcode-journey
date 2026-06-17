/**
 * Problem: 1460. Make Two Arrays Equal by Reversing Subarrays
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if two arrays can be made equal by reversing subarrays
 *
 * @param target - Target array
 * @param arr - Array to compare
 *
 * @returns True if arrays can be equal
 */
const canBeEqual = (target: number[], arr: number[]): boolean => {
  // Sort both arrays in ascending order and compare as strings
  return (
    target.sort((a, b) => a - b).join('') === arr.sort((a, b) => a - b).join('')
  )
}
