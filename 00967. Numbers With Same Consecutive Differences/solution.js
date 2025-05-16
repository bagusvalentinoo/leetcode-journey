/**
 * Problem: 967. Numbers With Same Consecutive Differences
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns n-digit numbers where adjacent digits differ by exactly k
 *
 * @param {number} n - Length of numbers
 * @param {number} k - Difference between adjacent digits
 *
 * @returns {number[]} - Valid numbers
 */
const numsSameConsecDiff = (n, k) => {
  // Store all valid numbers
  const result = []

  // Helper function to build numbers recursively
  const buildNumber = (startIndex, num) => {
    // If we've built an n-digit number, add it to results
    if (startIndex === n) {
      result.push(num)
      return
    }

    // Get the last digit of current number
    const lastDigit = num % 10

    // Try adding digit that's k less than the last digit
    if (lastDigit - k >= 0)
      buildNumber(startIndex + 1, num * 10 + (lastDigit - k))

    // Try adding digit that's k more than the last digit
    // Skip if k=0 to avoid duplicates
    if (lastDigit + k <= 9 && k !== 0)
      buildNumber(startIndex + 1, num * 10 + (lastDigit + k))
  }

  // Start with each valid first digit (1-9)
  for (let digit = 1; digit <= 9; digit++) buildNumber(1, digit)

  return result
}
