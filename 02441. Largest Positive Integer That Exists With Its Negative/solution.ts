/**
 * Problem: 2441. Largest Positive Integer That Exists With Its Negative
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the largest value with its negative in the array
 *
 * @param nums - Array of non-zero integers
 *
 * @returns Largest valid positive integer
 */
const findMaxK = (nums: number[]): number => {
  // Track values already processed
  const seen: Set<number> = new Set()
  // Store the largest valid positive integer
  let largest: number = -1

  // Check each value against its negative
  for (const num of nums) {
    // Update the result when the opposite value was seen
    if (seen.has(-num)) largest = Math.max(largest, Math.abs(num))

    // Record the current value for later checks
    seen.add(num)
  }

  // Return the largest matching positive integer
  return largest
}
