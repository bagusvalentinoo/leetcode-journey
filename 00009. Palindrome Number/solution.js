/**
 * Problem: 9. Palindrome Number
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 99.96%)
 */

/**
 * Checks if a number is a palindrome
 *
 * @param {number} x - Input number
 *
 * @returns {boolean} True if palindrome, false otherwise
 */
const isPalindrome = (x) => {
  // Initialize variables to store the reversed number and a copy of the input
  let copyNum = x,
    reverseNum = 0

  // Reverse the digits of the number
  while (copyNum > 0) {
    const lastDigit = copyNum % 10

    // Build the reversed number digit by digit
    reverseNum = reverseNum * 10 + lastDigit
    copyNum = Math.floor(copyNum / 10)
  }

  // Check if the original number is equal to its reversed version
  return x === reverseNum
}
