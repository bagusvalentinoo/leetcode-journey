/**
 * Problem: 3340. Check Balanced String
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if sum of digits at even indices equals sum at odd indices
 *
 * @param {string} num - Input string of digits
 *
 * @returns {boolean} True if sums are equal
 */
const isBalanced = (num) => {
  // Initialize sums for even and odd indices
  let evenIndexSum = 0,
    oddIndexSum = 0

  // Iterate through each character in the string
  for (let position = 0; position < num.length; position++) {
    // If index is even, add to even sum
    if (position % 2 === 0) evenIndexSum += parseInt(num[position])
    // If index is odd, add to odd sum
    else oddIndexSum += parseInt(num[position])
  }

  // Return true if sums are equal
  return evenIndexSum === oddIndexSum
}
