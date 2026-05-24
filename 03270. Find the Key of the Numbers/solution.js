/**
 * Problem: 3270. Find the Key of the Numbers
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Generates key by taking minimum digit at each position
 *
 * @param {number} num1 - First 4-digit number (will be padded with zeros)
 * @param {number} num2 - Second 4-digit number (will be padded with zeros)
 * @param {number} num3 - Third 4-digit number (will be padded with zeros)
 *
 * @returns {number} Resulting 4-digit key
 */
const generateKey = (num1, num2, num3) => {
  // Convert to 4-digit string with leading zeros if needed
  num1 = num1.toString().padStart(4, '0')
  // Convert to 4-digit string with leading zeros if needed
  num2 = num2.toString().padStart(4, '0')
  // Convert to 4-digit string with leading zeros if needed
  num3 = num3.toString().padStart(4, '0')

  // String to build the result key
  let resultKey = ''

  // Compare digits at each position (0-3)
  for (let position = 0; position < 4; position++)
    // Take the minimum digit among the three numbers at current position
    resultKey += Math.min(num1[position], num2[position], num3[position])

  // Convert result string back to integer and return
  return parseInt(resultKey, 10)
}
