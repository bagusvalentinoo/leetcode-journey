/**
 * Problem: 3754. Concatenate Non-Zero Digits and Multiply by Sum I
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Reverses digits and multiplies by sum of non-zero digits
 *
 * @param n - Input integer
 *
 * @returns Reversed number * sum of non-zero digits
 */
const sumAndMultiply = (n: number): number => {
  // Variable to store the reversed number (excluding zeros)
  let reversedNumber: number = 0
  // Variable to store the sum of non-zero digits
  let digitSum: number = 0
  // Multiplier for place value when building reversed number
  let placeMultiplier: number = 1

  // Process each digit from right to left (least significant to most)
  while (n > 0) {
    // Check if current digit is non-zero
    if (n % 10 !== 0) {
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
