/**
 * Problem: 3300. Minimum Element After Replacement With Digit Sum
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds minimum digit sum among all numbers in the array
 *
 * @param nums - Input array of integers
 *
 * @returns Minimum digit sum found
 */
const minElement = (nums: number[]): number => {
  // Initialize answer to Infinity to track minimum digit sum
  let minimumDigitSum: number = Infinity

  // Iterate through each number in the array
  for (const currentNumber of nums) {
    // Calculate sum of digits for current number
    const digitSumOfNumber: number = currentNumber
      .toString() // Convert number to string
      .split('') // Split into individual digits
      .reduce(
        (accumulatedSum: number, currentDigit: string) =>
          accumulatedSum + Number(currentDigit),
        0
      )

    // Update minimum digit sum if current digit sum is smaller
    minimumDigitSum = Math.min(minimumDigitSum, digitSumOfNumber)
  }

  // Return the smallest digit sum found
  return minimumDigitSum
}
