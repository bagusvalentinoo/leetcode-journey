/**
 * Problem: 50. Pow(x, n)
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates x raised to the power n
 *
 * @param {number} x - Base number
 * @param {number} n - Exponent
 *
 * @returns {number} x raised to power n
 */
const myPow = (x, n) => {
  // Base case: any number to power 0 is 1
  if (n === 0) return 1
  // Handle negative exponent by taking reciprocal
  if (n < 0) {
    // Convert x to its reciprocal
    x = 1 / x
    // Make exponent positive
    n = -n
  }

  // Recursively calculate half power
  const half = myPow(x, Math.floor(n / 2))

  // If n is even: result = half^2
  // If n is odd: result = half^2 * x
  return n % 2 === 0 ? half * half : half * half * x
}
