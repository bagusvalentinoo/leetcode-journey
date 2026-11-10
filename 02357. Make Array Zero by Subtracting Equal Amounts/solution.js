/**
 * Problem: 2357. Make Array Zero by Subtracting Equal Amounts
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count the distinct positive values that require separate operations
 *
 * @param {number[]} nums - Non-negative integers to reduce to zero
 *
 * @returns {number} Minimum number of operations
 */
const minimumOperations = (nums) => {
  // Store each distinct positive value because each requires one operation
  const positiveValues = new Set(nums.filter((number) => number > 0))

  // Return the number of distinct positive values
  return positiveValues.size
}
