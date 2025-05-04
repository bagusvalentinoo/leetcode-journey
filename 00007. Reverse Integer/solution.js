/**
 * Problem: 7. Reverse Integer
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 32 ms (Beats 99.45%)
 */

/**
 * Reverses digits of a 32-bit signed integer
 *
 * @param {number} x - Integer to reverse
 *
 * @returns {number} - Reversed integer or 0 if outside 32-bit range
 */
const reverse = (x) => {
  // Define 32-bit integer range
  const intMin = -(2 ** 31)
  const intMax = 2 ** 31 - 1

  // Initialize temporary variables and result
  let temp = 0,
    base = x
  let result = 0

  // Loop through each digit of the number
  for (let i = 0; i < x.toString().replace('-', '').length; i++) {
    // Extract the last digit
    temp = base % 10
    // Remove the last digit from the number
    base = x > 0 ? Math.floor(base / 10) : Math.ceil(base / 10)
    // Build the reversed number
    result = result * 10 + temp

    // Check if result is outside 32-bit range
    if (result < intMin || result > intMax) return 0
  }

  // Return the reversed number
  return result
}
