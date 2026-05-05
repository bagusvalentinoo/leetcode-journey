/**
 * Problem: 3512. Minimum Operations to Make Array Sum Divisible by K
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates remainder of sum divided by k
 *
 * @param {number[]} nums - Input array of integers
 * @param {number} k - Divisor
 *
 * @returns {number} Remainder of sum modulo k
 */
const minOperations = (nums, k) => {
  // Initialize sum accumulator
  let totalSum = 0

  // Calculate sum of all elements in the array
  for (const currentValue of nums) totalSum += currentValue

  // Return remainder of total sum divided by k
  return totalSum % k
}
