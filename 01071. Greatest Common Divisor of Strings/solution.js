/**
 * Problem: 1071. Greatest Common Divisor of Strings
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the greatest common divisor (GCD) string of two strings
 *
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 *
 * @returns {string} - GCD string or empty if none exists
 */
const gcdOfStrings = (str1, str2) => {
  // Helper function to compute the greatest common divisor (GCD) of two numbers using Euclidean algorithm
  const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b))

  // Check if concatenating str1 + str2 is equal to str2 + str1; if not, there is no common divisor string
  if (str1 + str2 !== str2 + str1) return ''

  // Return the substring of str1 from index 0 to the GCD of the lengths of str1 and str2
  return str1.slice(0, getGCD(str1.length, str2.length))
}
