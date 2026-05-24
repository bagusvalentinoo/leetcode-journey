/**
 * Problem: 3270. Find the Key of the Numbers
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Generates key by taking minimum digit at each position
 *
 * @param num1 - First 4-digit number (will be padded with zeros)
 * @param num2 - Second 4-digit number (will be padded with zeros)
 * @param num3 - Third 4-digit number (will be padded with zeros)
 *
 * @returns Resulting 4-digit key
 */
const generateKey = (num1: number, num2: number, num3: number): number => {
  // Convert to 4-digit string with leading zeros if needed
  let paddedNum1: string = num1.toString().padStart(4, '0')
  // Convert to 4-digit string with leading zeros if needed
  let paddedNum2: string = num2.toString().padStart(4, '0')
  // Convert to 4-digit string with leading zeros if needed
  let paddedNum3: string = num3.toString().padStart(4, '0')

  // String to build the result key
  let resultKey: string = ''

  // Compare digits at each position (0-3)
  for (let position: number = 0; position < 4; position++)
    // Take the minimum digit among the three numbers at current position
    resultKey += Math.min(
      parseInt(paddedNum1[position]),
      parseInt(paddedNum2[position]),
      parseInt(paddedNum3[position])
    )

  // Convert result string back to integer and return
  return parseInt(resultKey, 10)
}
