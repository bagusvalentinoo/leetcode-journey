/**
 * Problem: 989. Add to Array-Form of Integer
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Adds integer k to the array-form of an integer num
 *
 * @param {number[]} num - Array representation of an integer
 * @param {number} k - Integer to add
 *
 * @returns {number[]} - Array representation of num + k
 */
const addToArrayForm = (num, k) => {
  // Index pointing to the rightmost digit of num
  let lastIndex = num.length - 1

  while (k) {
    // If we've processed all digits in num, add new digits at the front
    if (lastIndex < 0) num.unshift(k % 10)
    else {
      // Add k to the current digit
      k = num[lastIndex] + k
      // Store the ones digit
      num[lastIndex] = k % 10
      // Move to the next digit to the left
      lastIndex--
    }

    // Keep only the carry for the next iteration
    k = Math.floor(k / 10)
  }

  return num
}
