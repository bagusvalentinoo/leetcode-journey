/**
 * Problem: 231. Power of Two
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check if a number is a power of two
 *
 * @param {number} n - The integer to check
 *
 * @returns {boolean} - True if n is a power of two, otherwise false
 */
const isPowerOfTwo = (n) => {
  // Check if n is exactly 1, which is a power of two (2^0)
  if (n === 1) return true

  // If n is less than or equal to 0, or n is odd (not divisible by 2), it's not a power of two
  if (n <= 0 || n % 2) return false

  // Loop to repeatedly divide n by 2 while n is greater than 2
  while (n > 2) {
    // If n is not divisible by 2 at any point, it's not a power of two
    if (n % 2) return false

    // Divide n by 2 for the next iteration
    n = n / 2
  }

  // If the loop completes, n must be 2, which is a power of two
  return true
}
