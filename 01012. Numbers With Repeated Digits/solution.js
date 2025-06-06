/**
 * Problem: 1012. Numbers With Repeated Digits
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts numbers up to n that have at least one repeated digit
 *
 * @param {number} n - Upper bound
 *
 * @returns {number} - Count of numbers with repeated digits
 */
const numDupDigitsAtMostN = (n) => {
  // Convert number to string for digit manipulation
  const numStr = String(n)
  // Get the length of the number
  const digitCount = numStr.length
  // Initialize counter for numbers without repeated digits
  let uniqueDigitCount = 0

  // Count numbers with unique digits for lengths less than our target number
  for (let i = 1; i < digitCount; i++)
    uniqueDigitCount += 9 * permutation(9, i - 1)

  // Track digits we've seen so far
  const usedDigits = new Set()

  // Process each position of our number from left to right
  for (let i = 0; i < digitCount; i++) {
    // Get the current digit
    const currentDigit = parseInt(numStr[i])

    // Count valid numbers with digits less than the current position's digit
    for (let d = i === 0 ? 1 : 0; d < currentDigit; d++)
      if (!usedDigits.has(d))
        uniqueDigitCount += permutation(9 - i, digitCount - i - 1)

    // If we encounter a repeated digit, we're done
    if (usedDigits.has(currentDigit)) break

    // Mark current digit as used
    usedDigits.add(currentDigit)
  }

  // If the number itself has all unique digits, include it in our count
  if (usedDigits.size === digitCount) uniqueDigitCount++

  // Return count of numbers with at least one repeated digit
  return n - uniqueDigitCount
}

/**
 * Computes the permutation P(m, k) = m! / (m - k)!
 *
 * @param {number} m Total items
 * @param {number} k Number of items to choose
 *
 * @returns {number} The permutation value
 */
const permutation = (m, k) => {
  // Base case: choosing 0 items is always 1 permutation
  if (k === 0) return 1

  // Initialize result to 1
  let result = 1

  // Calculate m × (m-1) × (m-2) × ... × (m-k+1)
  for (let i = 0; i < k; i++) result *= m - i

  return result
}
