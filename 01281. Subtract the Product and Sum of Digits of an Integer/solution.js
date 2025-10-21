/**
 * Problem: 1281. Subtract the Product and Sum of Digits of an Integer
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculates the difference between the product and sum of digits
 *
 * @param {number} n - Input number
 *
 * @returns {number} - Result of product minus sum of digits
 */
const subtractProductAndSum = (n) => {
  // Initialize a variable to store the sum of digits, starting at 0
  let dsum = 0

  // Initialize a variable to store the product of digits, starting at 1
  let dproduct = 1

  // Loop through each digit of the number until no digits remain
  while (n > 0) {
    // Extract the last digit of the number
    const digit = n % 10

    // Add the extracted digit to the sum
    dsum += digit

    // Multiply the extracted digit with the product
    dproduct *= digit

    // Remove the last digit from the number by integer division
    n = Math.floor(n / 10)
  }

  // Return the difference between the product and the sum of digits
  return dproduct - dsum
}
