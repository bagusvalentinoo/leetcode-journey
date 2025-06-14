/**
 * Problem: 2566. Maximum Difference by Remapping a Digit
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find max-min difference after replacing one digit type with another
 *
 * @param {number} num - The input number
 *
 * @returns {number} - The difference between max and min values
 */
const minMaxDifference = (num) => {
  // Convert number to string for digit manipulation
  const numStr = num.toString()
  // Initialize variables to track digits to replace for max and min calculations
  let maxReplaceDigit = null,
    minReplaceDigit = null

  // Find first digit that's not 9 to maximize the number
  for (const digit of numStr)
    if (digit !== '9') {
      maxReplaceDigit = digit
      break
    }

  // Replace target digit with 9 to get maximum value
  const maxStr = maxReplaceDigit
    ? numStr.replace(new RegExp(maxReplaceDigit, 'g'), '9')
    : numStr
  const maxValue = parseInt(maxStr, 10)

  // Find first digit that's not 0 to minimize the number
  for (const digit of numStr)
    if (digit !== '0') {
      minReplaceDigit = digit
      break
    }

  // Replace target digit with 0 to get minimum value
  const minStr = minReplaceDigit
    ? numStr.replace(new RegExp(minReplaceDigit, 'g'), '0')
    : numStr
  const minValue = parseInt(minStr, 10)

  // Return the difference between max and min values
  return maxValue - minValue
}
