/**
 * Problem: 2154. Keep Multiplying Found Values by Two
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Doubles the original until not in nums
 *
 * @param {number[]} nums - Input array
 * @param {number} original - Initial value
 *
 * @returns {number} - Resulting value
 */
const findFinalValue = (nums, original) => {
  // Use a while loop to repeatedly check if `original` exists in `nums`.
  while (nums.includes(original))
    // If `original` is found in `nums`, double its value.
    original = original * 2

  // Return the final value of `original` after the loop ends.
  return original
}
