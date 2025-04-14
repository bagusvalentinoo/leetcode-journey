/**
 * Problem: 898. Bitwise ORs of Subarrays
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 110 ms (Beats 100%)
 */

/**
 * The number of distinct bitwise ORs of all subarrays in arr.
 *
 * @param {number[]} arr - The input array of integers
 *
 * @returns {number} - The number of distinct bitwise OR results
 */
const subarrayBitwiseORs = (arr) => {
  const uniqueOrValues = new Set() // All distinct OR values
  let currentOr = 0 // Current OR value

  // Iterate over each number in the array
  for (let i = 0; i < arr.length; i++) {
    currentOr |= arr[i] // Update current OR value
    let subarrayOr = 0 // Current subarray OR value

    // Iterate over all subarrays ending at current index
    for (let j = i; j >= 0; j--) {
      subarrayOr |= arr[j] // Update subarray OR value
      uniqueOrValues.add(subarrayOr) // Add to set of unique OR values

      // Stop if subarray OR equals current OR
      if (subarrayOr === currentOr) break
    }
  }

  // Return the number of unique OR values
  return uniqueOrValues.size
}
