/**
 * Problem: 1299. Replace Elements with Greatest Element on Right Side
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Replaces each element with the greatest element to its right
 *
 * @param {number[]} arr - Input array of integers
 *
 * @returns {number[]} Array with each element replaced by max on right
 */
const replaceElements = (arr) => {
  // Track maximum value seen from the right
  let maxRight = -1

  // Traverse array from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    // Store current value before overwriting
    let current = arr[i]

    // Replace current element with max from its right
    arr[i] = maxRight

    // Update maxRight for next iteration (elements to the left)
    maxRight = Math.max(maxRight, current)
  }

  // Return the modified array
  return arr
}
