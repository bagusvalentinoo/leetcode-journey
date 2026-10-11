/**
 * Problem: 2778. Sum of Squares of Special Elements
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sums squares of special elements whose 1-indexed position divides n
 *
 * @param nums - Input array of integers
 *
 * @returns Sum of squares of special elements
 */
const sumOfSquares = (nums: number[]): number => {
  // Store array length for divisibility checks
  const n: number = nums.length

  // Accumulate sum of squares of special elements
  let total: number = 0

  // Iterate through array with 0-based index
  for (let i: number = 0; i < n; i++) {
    // Check if 1-indexed position divides array length, add its square
    if (n % (i + 1) === 0) total += nums[i] * nums[i]
  }

  // Return the accumulated sum of squares
  return total
}
