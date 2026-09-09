/**
 * Problem: 3871. Count Commas in Range II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts total commas used when writing all integers from 1 to n
 *
 * @param {number} n - Upper bound of the range (inclusive)
 *
 * @returns {number} Total number of commas used
 */
const countCommas = (n) => {
  // Store total commas accumulated across all thresholds
  let totalCommas = 0

  // Walk each comma threshold (1000, 1000000, ...) while it stays within range
  for (let threshold = 1000; threshold <= n; threshold *= 1000)
    // Every number from threshold to n gains one comma at this threshold
    totalCommas += n - threshold + 1

  // Return the total commas counted across all thresholds
  return totalCommas
}
