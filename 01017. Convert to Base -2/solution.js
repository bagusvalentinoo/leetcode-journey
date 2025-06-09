/**
 * Problem: 1017. Convert to Base -2
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Convert an integer to its binary representation in base -2
 *
 * @param {number} n - The integer to convert
 *
 * @returns {string} - The binary string in base -2
 */
const baseNeg2 = (n) => ToNegabinary(BigInt(n))

/**
 * Convert a BigInt to its binary representation in base -2
 *
 * @param {bigint} num - The BigInt to convert
 *
 * @returns {string} - The binary string in base -2
 */
const ToNegabinary = (num) => {
  // Initialize an empty string to store the result
  let binaryStr = ''

  while (num !== 0n) {
    // Calculate remainder when divided by -2
    let remainder = num % -2n
    num /= -2n

    // Handle negative remainder by converting to positive
    if (remainder < 0n) {
      remainder += 2n
      num++
    }

    // Prepend the remainder digit to the result string
    binaryStr = remainder.toString() + binaryStr
  }

  // Return "0" if result is empty, otherwise return the binary string
  return binaryStr.length === 0 ? '0' : binaryStr
}
