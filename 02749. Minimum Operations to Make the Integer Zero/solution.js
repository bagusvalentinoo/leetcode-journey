/**
 * Problem: 2749. Minimum Operations to Make the Integer Zero
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

/**
 * Finds the minimum k to reduce num1 to zero by subtracting num2 k times
 *
 * @param {number} num1 - Initial value
 * @param {number} num2 - Value to subtract
 *
 * @returns {number} - Minimum k, or -1 if impossible
 */
const makeTheIntegerZero = (num1, num2) => {
  // Helper function to count the number of 1's in the binary representation of n
  // This function takes an integer and returns the count of '1' bits in its binary form
  const countOnes = (n) => n.toString(2).replace(/0/g, '').length

  // Iterate k from 1 to 60 (since constraints allow up to 60 operations)
  for (let k = 1; k <= 60; k++) {
    // Calculate the remaining value after subtracting num2 * k from num1
    const remaining = num1 - num2 * k

    // If the remaining value is less than k, it's impossible to reach zero, so return -1
    if (remaining < k) return -1

    // If k is greater than or equal to the number of 1's in the binary representation of remaining,
    // it means we can reach zero with k operations, so return k
    if (k >= countOnes(remaining)) return k
  }

  // If no valid k is found within the loop, return -1 to indicate impossibility
  return -1
}
