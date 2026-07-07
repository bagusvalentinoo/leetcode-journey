/**
 * Problem: 3754. Concatenate Non-Zero Digits and Multiply by Sum I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reverses digits and multiplies by sum of non-zero digits
 *
 * @param {number} n - Input integer
 *
 * @returns {number} Reversed number * sum of non-zero digits
 */
const sumAndMultiply = (n) => {
  // Variable to store the reversed number (excluding zeros)
  let reversedNumber = 0
  // Variable to store the sum of non-zero digits
  let digitSum = 0
  // Multiplier for place value when building reversed number
  let placeMultiplier = 1

  // Process each digit from right to left (least significant to most)
  while (n > 0) {
    // Check if current digit is non-zero
    if (n % 10 != 0) {
      // Add current digit to sum
      digitSum += n % 10
      // Build reversed number by placing digit at appropriate place value
      reversedNumber += (n % 10) * placeMultiplier
      // Update multiplier for next place value (tens, hundreds, etc.)
      placeMultiplier *= 10
    }

    // Remove the processed digit from the number
    n = Math.floor(n / 10)
  }

  // Return product of reversed number and sum of non-zero digits
  return reversedNumber * digitSum
}
