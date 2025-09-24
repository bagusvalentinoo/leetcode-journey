/**
 * Problem: 166. Fraction to Recurring Decimal
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the decimal string of a fraction, with repeating decimals in parentheses
 *
 * @param {number} numerator - Fraction numerator
 * @param {number} denominator - Fraction denominator
 *
 * @returns {string} - Decimal representation
 */
const fractionToDecimal = (numerator, denominator) => {
  // If numerator is zero, the result is always '0'
  if (numerator === 0) return '0'

  // Initialize the result string
  let result = ''

  // If the result should be negative, add '-' to the result
  if ((numerator < 0) ^ (denominator < 0)) result += '-'

  // Use absolute values for calculation
  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)

  // Append the integer part of the division to the result
  result += Math.floor(numerator / denominator)

  // Calculate the initial remainder
  let remainder = numerator % denominator

  // If there is no remainder, return the result as it is a whole number
  if (remainder === 0) return result

  // Add decimal point to the result for the fractional part
  result += '.'

  // Map to store previously seen remainders and their positions in the result
  const remainderPositionMap = new Map()

  // Loop until remainder becomes zero or a repeating remainder is found
  while (remainder !== 0) {
    // If the remainder is already seen, a repeating sequence is detected
    if (remainderPositionMap.has(remainder)) {
      const repeatStartIndex = remainderPositionMap.get(remainder)

      // Insert parentheses around the repeating part
      return (
        result.slice(0, repeatStartIndex) +
        '(' +
        result.slice(repeatStartIndex) +
        ')'
      )
    }

    // Store the position of this remainder
    remainderPositionMap.set(remainder, result.length)

    // Multiply remainder by 10 for the next digit
    remainder *= 10

    // Append the next digit to the result
    result += Math.floor(remainder / denominator)

    // Update remainder
    remainder %= denominator
  }

  // Return the final result if no repeating sequence is found
  return result
}
