/**
 * Problem: 3345. Smallest Divisible Digit Product I
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds smallest number >= n whose digit product is divisible by t
 *
 * @param n - Starting number
 * @param t - Divisor for product of digits
 *
 * @returns Smallest valid number
 */
const smallestNumber = (n: number, t: number): number => {
  // If t is 0 or 1, any number's digit product is divisible by t
  if (t === 0 || t === 1) return n

  // Iterate through numbers starting from n
  for (let i: number = n; ; i++) {
    // Create a copy of current number to process digits
    let currentNumber: number = i
    // Initialize product of digits to 1 (multiplicative identity)
    let digitProduct: number = 1

    // Extract and multiply each digit
    while (currentNumber > 0) {
      // Get the last digit
      const lastDigit: number = currentNumber % 10

      // Multiply digit to product
      digitProduct *= lastDigit
      // Remove the last digit
      currentNumber = Math.floor(currentNumber / 10)
    }

    // If product is divisible by t, return current number
    if (digitProduct % t === 0) return i
  }
}
