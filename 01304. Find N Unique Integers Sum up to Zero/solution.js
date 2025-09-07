/**
 * Problem: 1304. Find N Unique Integers Sum up to Zero
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns an array of n integers that sum to zero
 *
 * @param {number} n - Array length
 *
 * @returns {number[]} - Array summing to zero
 */
const sumZero = (n) => {
  // Initialize an array of length n filled with zeros
  const arr = new Array(n).fill(0)
  // Start the positive/negative pair value from 1
  let currentValue = 1

  // Loop through half of the array to assign positive and negative pairs
  for (let i = 0; i < Math.floor(n / 2); i++) {
    // Assign the positive value to the current index
    arr[i] = currentValue
    // Assign the negative value to the mirrored index from the end
    arr[n - 1 - i] = -currentValue
    // Increment the value for the next pair
    currentValue++
  }

  // Return the resulting array that sums to zero
  return arr
}
