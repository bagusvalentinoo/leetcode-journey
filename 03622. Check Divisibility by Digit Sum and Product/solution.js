/**
 * Problem: 3622. Check Divisibility by Digit Sum and Product
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if number is divisible by sum of its digits plus product of its digits
 *
 * @param {number} n - Input number
 *
 * @returns {boolean} True if divisible, false otherwise
 */
const checkDivisibility = (n) => {
  // Initialize sum of digits to 0
  let digitSum = 0

  // Initialize product of digits to 1
  let digitProduct = 1

  // Store original number for final modulo operation
  const originalNumber = n

  // Extract each digit from the number
  while (n > 0) {
    // Add current digit to sum
    digitSum += n % 10

    // Multiply current digit to product
    digitProduct *= n % 10

    // Remove last digit from number
    n = Math.floor(n / 10)
  }

  // Return true if original number is divisible by (sum + product)
  return originalNumber % (digitSum + digitProduct) === 0
}
