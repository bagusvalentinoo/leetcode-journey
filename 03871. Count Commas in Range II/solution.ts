/**
 * Problem: 3871. Count Commas in Range II
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts total commas used when writing all integers from 1 to n
 *
 * @param n - Upper bound of the range (inclusive)
 *
 * @returns Total number of commas used
 */
const countCommas = (n: number): number => {
  // Store total commas accumulated across all thresholds
  let totalCommas: number = 0

  // Walk each comma threshold (1000, 1000000, ...) while it stays within range
  for (let threshold: number = 1000; threshold <= n; threshold *= 1000)
    // Every number from threshold to n gains one comma at this threshold
    totalCommas += n - threshold + 1

  // Return the total commas counted across all thresholds
  return totalCommas
}
