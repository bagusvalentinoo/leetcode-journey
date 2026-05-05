/**
 * Problem: 3512. Minimum Operations to Make Array Sum Divisible by K
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates remainder of sum divided by k
 *
 * @param nums - Input array of integers
 * @param k - Divisor
 *
 * @returns Remainder of sum modulo k
 */
const minOperations = (nums: number[], k: number): number => {
  // Initialize sum accumulator
  let totalSum: number = 0

  // Calculate sum of all elements in the array
  for (const currentValue of nums) totalSum += currentValue

  // Return remainder of total sum divided by k
  return totalSum % k
}
