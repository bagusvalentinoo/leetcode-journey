/**
 * Problem: 3536. Maximum Product of Two Digits
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds maximum product of two largest digits in a number
 *
 * @param n - Input integer
 *
 * @returns Product of two largest digits
 */
const maxProduct = (n: number): number => {
  // Initialize two largest digit trackers
  let largestDigit: number = 0,
    secondLargestDigit: number = 0

  // Process each digit of the number
  while (n > 0) {
    // Extract the last digit
    const currentDigit: number = n % 10

    // Update largest and second largest digits
    if (currentDigit > largestDigit) {
      secondLargestDigit = largestDigit
      largestDigit = currentDigit
    }
    // Update only second largest if current digit is between them
    else if (currentDigit > secondLargestDigit)
      secondLargestDigit = currentDigit

    // Remove the last digit
    n = Math.floor(n / 10)
  }

  // Return product of the two largest digits
  return largestDigit * secondLargestDigit
}
