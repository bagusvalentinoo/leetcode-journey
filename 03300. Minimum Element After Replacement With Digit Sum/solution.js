/**
 * Problem: 3300. Minimum Element After Replacement With Digit Sum
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum digit sum among all numbers in the array
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} Minimum digit sum found
 */
const minElement = (nums) => {
  // Initialize answer to Infinity to track minimum digit sum
  let minimumDigitSum = Infinity

  // Iterate through each number in the array
  for (const currentNumber of nums) {
    // Calculate sum of digits for current number
    const digitSumOfNumber = currentNumber
      .toString() // Convert number to string
      .split('') // Split into individual digits
      .reduce(
        // Sum up all digits
        (accumulatedSum, currentDigit) => accumulatedSum + Number(currentDigit),
        0
      )

    // Update minimum digit sum if current digit sum is smaller
    minimumDigitSum = Math.min(minimumDigitSum, digitSumOfNumber)
  }

  // Return the smallest digit sum found
  return minimumDigitSum
}
