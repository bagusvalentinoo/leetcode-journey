/**
 * Problem: 788. Rotated Digits
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts numbers from 1 to n that are valid after rotating 180 degrees
 *
 * @param n - Upper bound number
 *
 * @returns Count of valid rotated numbers
 */
const rotatedDigits = (n: number): number => {
  // Digits that become different valid digits when rotated
  const rotatingDigits: number[] = [2, 5, 6, 9]
  // Digits that remain valid and the same when rotated (0, 1, 8)
  const sameDigits: number[] = [0, 1, 8]

  // All valid digits (rotating + same)
  const validDigits: number[] = [...rotatingDigits, ...sameDigits]

  // Convert number to string for digit-by-digit processing
  const numberString: string = n.toString()

  // Counter for valid numbers
  let validCount: number = 0

  // Flag indicating if we've already placed a digit that changes upon rotation
  let hasRotatingDigit: boolean = false

  // Process each digit position from left to right
  for (let position: number = 0; position < numberString.length; position++) {
    // Get current digit at this position
    const currentDigit: number = Number(numberString[position])

    // Add count of all combinations where current digit is less than given digit
    // Multiply by all possible combinations for remaining positions
    validCount +=
      validDigits.filter((d) => d < currentDigit).length *
      Math.pow(validDigits.length, numberString.length - position - 1)

    // Subtract combinations that would result in no rotating digit (invalid numbers)
    // Only subtract if we haven't already placed a rotating digit
    if (!hasRotatingDigit) {
      validCount -=
        sameDigits.filter((d) => d < currentDigit).length *
        Math.pow(sameDigits.length, numberString.length - position - 1)
    }

    // If current digit is a rotating digit, mark that we have one
    if (rotatingDigits.includes(currentDigit)) {
      hasRotatingDigit = true
    }
    // If current digit is not valid at all, stop processing further digits
    else if (!sameDigits.includes(currentDigit)) {
      return validCount
    }
  }

  // Add 1 if we have a rotating digit (count the number itself)
  return validCount + (hasRotatingDigit ? 1 : 0)
}
