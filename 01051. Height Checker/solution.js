/**
 * Problem: 1051. Height Checker
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts indices where heights differ from their sorted order
 *
 * @param {number[]} heights - Array of heights
 *
 * @returns {number} Number of mismatched indices
 */
const heightChecker = (heights) => {
  // Create a shallow copy of the heights array to avoid mutating the original
  const sorted = [...heights]

  // Sort the copied array in ascending order
  sorted.sort((a, b) => a - b)

  // Initialize a counter for mismatched indices
  let mismatchCount = 0

  // Iterate through each index and compare original and sorted values
  for (let i = 0; i < heights.length; i++) {
    // Increment counter if values at the current index differ
    if (heights[i] !== sorted[i]) mismatchCount++
  }

  // Return the total number of mismatched indices
  return mismatchCount
}
