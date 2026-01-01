/**
 * Problem: 66. Plus One
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Increment a large integer represented as an array of digits by one
 *
 * @param {number[]} digits - Array where each element is a digit of the integer
 *
 * @returns {number[]} - Result array after incrementing by one
 */
const plusOne = (digits: number[]): number[] => {
  // Iterate through the digits array from rightmost digit to leftmost digit.
  for (let i = digits.length - 1; i >= 0; i--) {
    // Check if the current digit is not equal to 9.
    if (digits[i] !== 9) {
      // Increment the current digit by one.
      digits[i]++

      // Return the modified digits array immediately.
      return digits
    }

    // Set the current digit to 0 if it is 9 (carry over).
    digits[i] = 0
  }

  // If all digits were 9, add a new most significant digit 1 at the beginning.
  digits.unshift(1)

  // Return the final digits array.
  return digits
}
