/**
 * Problem: 2441. Largest Positive Integer That Exists With Its Negative
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the largest value with its negative in the array
 *
 * @param {number[]} nums - Array of non-zero integers
 *
 * @returns {number} Largest valid positive integer
 */
const findMaxK = (nums) => {
  // Build a set of all values for O(1) membership checks
  const seen = new Set(nums)

  // Initialize the result to -1 for the no valid pair case
  let maxK = -1

  // Iterate over each unique value in the set
  for (const value of seen) {
    // Update maxK when the value is positive and its negative exists
    if (value > 0 && seen.has(-value)) maxK = Math.max(maxK, value)
  }

  // Return the largest valid k found or -1 when none exists
  return maxK
}
