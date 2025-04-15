/**
 * Problem: 902. Numbers At Most N Given Digit Set
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts valid integers <= n formed from given digits
 *
 * @param {string[]} digits - Non-decreasing array of digits
 * @param {number} n - Upper limit
 *
 * @returns {number} - Count of valid integers
 */
const atMostNGivenDigitSet = (digits, n) => {
  const nStr = String(n)
  const nLength = nStr.length
  const digitsLength = digits.length
  let totalCount = 0

  // Count numbers with fewer digits than n
  for (let length = 1; length < nLength; length++)
    totalCount += Math.pow(digitsLength, length)

  /**
   * Counts valid integers <= n formed from given digits
   *
   * @param {number} index - Current index in the number
   *
   * @returns {number} - Count of valid integers
   */
  const countSameLengthNumbers = (index) => {
    // Base case: if we have reached the end of the number, return 1
    if (index === nLength) return 1

    // Get the current digit
    const currentDigit = nStr[index]
    let count = 0

    // Count digits less than the current digit in n
    for (const digit of digits)
      if (digit < currentDigit) count++
      else break

    // Count numbers with the same number of digits as n
    count *= Math.pow(digitsLength, nLength - index - 1)

    // Check if the current digit matches any digit in the set
    for (const digit of digits) {
      if (digit === currentDigit) {
        count += countSameLengthNumbers(index + 1)
        break
      }
    }

    return count
  }

  // Count numbers with the same number of digits as n
  totalCount += countSameLengthNumbers(0)

  return totalCount
}
