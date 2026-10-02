/**
 * Problem: 1837. Sum of Digits in Base K
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Sums digits of n after converting from base 10 to base k
 *
 * @param {number} n - Integer in base 10
 * @param {number} k - Target base
 *
 * @returns {number} Sum of base-k digits in base 10
 */
const sumBase = (n, k) => {
  // Accumulate base-k digits
  let digitSum = 0

  // Extract least significant digit until n is consumed
  while (n > 0) {
    // Add current remainder as the next base-k digit
    digitSum += n % k

    // Drop the processed digit
    n = Math.floor(n / k)
  }

  // Return total of base-k digits
  return digitSum
}
