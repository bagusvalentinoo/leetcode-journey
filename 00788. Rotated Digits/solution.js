/**
 * Problem: 788. Rotated Digits
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts numbers from 1 to n that are valid after rotating 180 degrees
 *
 * @param {number} n - Upper bound number
 *
 * @returns {number} Count of valid rotated numbers
 */
const rotatedDigits = (n) => {
  // Digits that become different valid digits when rotated
  const rotatingDigits = [2, 5, 6, 9]
  // Digits that remain valid and the same when rotated (0, 1, 8)
  const sameDigits = [0, 1, 8]

  // All valid digits (rotating + same)
  const validDigits = [...rotatingDigits, ...sameDigits]

  // Convert number to string for digit-by-digit processing
  const numberString = n.toString()

  // Counter for valid numbers
  let validCount = 0

  // Flag indicating if we've already placed a digit that changes upon rotation
  let hasRotatingDigit = false

  // Process each digit position from left to right
  for (let position = 0; position < numberString.length; position++) {
    // Get current digit at this position
    const currentDigit = Number(numberString[position])

    // Add count of all combinations where current digit is less than given digit
    // Multiply by all possible combinations for remaining positions
    validCount +=
      validDigits.filter((d) => d < currentDigit).length *
      validDigits.length ** (numberString.length - position - 1)

    // Subtract combinations that would result in no rotating digit (invalid numbers)
    // Only subtract if we haven't already placed a rotating digit
    if (!hasRotatingDigit)
      validCount -=
        sameDigits.filter((d) => d < currentDigit).length *
        sameDigits.length ** (numberString.length - position - 1)
    // If current digit is a rotating digit, mark that we have one
    if (rotatingDigits.includes(currentDigit)) hasRotatingDigit = true
    // If current digit is not valid at all, stop processing further digits
    else if (!sameDigits.includes(currentDigit)) return validCount
  }

  // Add 1 if we have a rotating digit (count the number itself)
  return validCount + (hasRotatingDigit ? 1 : 0)
}
