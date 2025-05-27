/**
 * Problem: 2894. Divisible and Non-divisible Sums Difference
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates difference between sums of non-divisible and divisible numbers by m from 1 to n
 *
 * @param {number} n - Upper bound of range
 * @param {number} m - Divisor
 *
 * @returns {number} - Difference between the two sums
 */
const differenceOfSums = (n, m) => {
  // Initialize non-divisible sum and divisible sum
  let nonDivisibleSum = 0,
    divisibleSum = 0

  // Iterate through all numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    // Add to nonDivisibleSum if not divisible by m, otherwise add to divisibleSum
    if (i % m !== 0) nonDivisibleSum += i
    else divisibleSum += i
  }

  // Return the difference between non-divisible and divisible sums
  return nonDivisibleSum - divisibleSum
}
