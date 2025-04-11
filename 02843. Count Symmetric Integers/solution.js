/**
 * Problem: 2843. Count Symmetric Integers
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

/*
 * Checks if a number is symmetric
 *
 * @param {number} num - The number to check
 *
 * @returns {boolean} - True if the number is symmetric, false otherwise
 */
const isSymmetricInteger = (n) => {
  // Check if the number is a two-digit number
  if (n >= 10 && n <= 99) return n % 10 === Math.floor(n / 10)
  // Check if the number is a four-digit number
  if (n >= 1_000 && n <= 9_999) {
    // Split the number into left and right digits
    const leftDigits = Math.floor(n / 100)
    const rightDigits = n % 100
    // Calculate the sum of digits on the left and right of the middle
    const leftSum = (leftDigits % 10) + Math.floor(leftDigits / 10)
    const rightSum = (rightDigits % 10) + Math.floor(rightDigits / 10)

    // Check if the sum of digits on the left and right are equal
    return leftSum === rightSum
  }

  // We are in a range with an odd amount of digits; these cannot be symmetric
  return false
}

/**
 * Counts the number of symmetric integers in the range [low, high]
 *
 * @param {number} low - The lower bound of the range
 * @param {number} high - The upper bound of the range
 *
 * @returns {number} - The count of symmetric integers in the range
 */
const countSymmetricIntegers = (low, high) => {
  // Initialize the result counter
  let result = 0

  // Iterate over the range and count symmetric integers
  for (let i = low; i <= high; ++i) result += isSymmetricInteger(i)

  // Return the count of symmetric integers
  return result
}
