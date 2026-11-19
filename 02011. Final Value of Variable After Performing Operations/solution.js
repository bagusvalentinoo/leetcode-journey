/**
 * Problem: 2011. Final Value of Variable After Performing Operations
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculate the value after performing all operations
 *
 * @param {string[]} operations - Operations to perform
 *
 * @returns {number} Final value of X
 */
const finalValueAfterOperations = (operations) => {
  // Start X at its specified initial value
  let value = 0

  // Adjust X according to each operation's middle character
  for (const operation of operations) value += operation[1] === '+' ? 1 : -1

  // Return the final value of X
  return value
}
