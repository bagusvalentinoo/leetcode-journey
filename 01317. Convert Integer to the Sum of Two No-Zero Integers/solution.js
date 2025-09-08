/**
 * Problem: 1317. Convert Integer to the Sum of Two No-Zero Integers
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds two positive integers without zeros that sum to n
 *
 * @param {number} n - The target sum
 *
 * @returns {number[]} - An array containing the two integers
 */
const getNoZeroIntegers = (n) => {
  // Iterate through all possible values for the first integer, starting from 1 up to n
  for (let firstInt = 1; firstInt <= n; firstInt++) {
    // Calculate the second integer so that their sum equals n
    const secondInt = n - firstInt

    // Check if both integers do not contain the digit '0'
    if (
      !firstInt.toString().includes('0') &&
      !secondInt.toString().includes('0')
    )
      // If both integers are valid, return them as an array
      return [firstInt, secondInt]
  }
}
