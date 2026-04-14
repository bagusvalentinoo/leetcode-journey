/**
 * Problem: 3870. Count Commas in Range
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts commas needed when writing numbers from 1 to n
 *
 * @param n - Upper bound of the range
 *
 * @returns Number of commas needed
 */
const countCommas = (n: number): number => Math.max(0, n - 999)
