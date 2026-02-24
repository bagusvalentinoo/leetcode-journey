/**
 * Problem: 1299. Replace Elements with Greatest Element on Right Side
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Replaces each element with the greatest element to its right
 *
 * @param arr - Input array of integers
 *
 * @returns Array with each element replaced by max on right
 */
const replaceElements = (arr: number[]): number[] => {
  // Track maximum value seen from the right
  let maxRight: number = -1

  // Traverse array from right to left
  for (let i: number = arr.length - 1; i >= 0; i--) {
    // Store current value before overwriting
    let current: number = arr[i]

    // Replace current element with max from its right
    arr[i] = maxRight

    // Update maxRight for next iteration (elements to the left)
    maxRight = Math.max(maxRight, current)
  }

  // Return the modified array
  return arr
}
