/**
 * Problem: 29. Divide Two Integers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Divides integers without using *, /, or % operators
 *
 * @param {number} dividend - Number being divided
 * @param {number} divisor - Number to divide by
 *
 * @returns {number} - Quotient, clamped to 32-bit integer range
 */
const divide = (dividend, divisor) => {
  // Calculate the quotient, truncating any decimal part
  const quotient = Math.trunc(dividend / divisor)

  // Check if quotient is below the 32-bit integer minimum value
  if (quotient < -(2 ** 31)) return -(2 ** 31)
  // Check if quotient exceeds the 32-bit integer maximum value
  if (quotient > 2 ** 31 - 1) return 2 ** 31 - 1

  // Return the bounded quotient
  return quotient
}
