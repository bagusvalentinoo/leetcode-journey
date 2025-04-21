/**
 * Problem: 2145. Count the Hidden Sequences
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Counts valid hidden sequences given differences and a range.
 *
 * @param {number[]} differences - Consecutive differences in the hidden sequence
 * @param {number} lower - Lower bound of the hidden sequence
 * @param {number} upper - Upper bound of the hidden sequence
 *
 * @returns {number} - Number of valid hidden sequences
 */
const numberOfArrays = (differences, lower, upper) => {
  // Initialize min and max cumulative sums
  let x = 0,
    y = 0,
    cur = 0

  // Iterate through differences
  for (const d of differences) {
    cur += d // Update cumulative sum
    x = Math.min(x, cur) // Update min cumulative sum
    y = Math.max(y, cur) // Update max cumulative sum

    // If the range of cumulative sums exceeds the range of valid values, return 0
    if (y - x > upper - lower) return 0
  }

  // Return the number of valid hidden sequences
  return upper - lower - (y - x) + 1
}
