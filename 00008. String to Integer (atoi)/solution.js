/**
 * Problem: 8. String to Integer (atoi)
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Converts a string to a 32-bit signed integer
 *
 * @param {string} s - The string to convert to an integer
 *
 * @returns {number} - The 32-bit signed integer result
 */
const myAtoi = (s) => {
  // Parse the input string to an integer
  const ans = Number.parseInt(s)

  // Check if the parsed result is a valid number
  if (ans) {
    // Clamp to 32-bit signed integer limits
    if (ans <= -2147483648) return -2147483648
    else if (ans >= 2147483647) return 2147483647

    // Return the valid integer
    return ans
  }

  // Return 0 if parsing failed
  return 0
}
