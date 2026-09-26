/**
 * Problem: 1822. Sign of the Product of an Array
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns sign of product of all array elements
 *
 * @param {number[]} nums - Input array of integers
 *
 * @returns {number} 1 if product positive, -1 if negative, 0 if zero
 */
const arraySign = (nums) => {
  // Count negative numbers to determine product sign
  let negativeCount = 0

  // Iterate through each number in the array
  for (const currentNumber of nums) {
    // If any element is zero the product is zero
    if (currentNumber === 0) return 0
    // Count negative numbers
    if (currentNumber < 0) negativeCount++
  }

  // Return -1 for odd negatives, 1 for even negatives
  return negativeCount % 2 === 0 ? 1 : -1
}
