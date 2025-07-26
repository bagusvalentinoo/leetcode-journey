/**
 * Problem: 1073. Adding Two Negabinary Numbers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Adds two negabinary numbers (base -2) as arrays (MSB first)
 *
 * @param {number[]} arr1 - First negabinary number (MSB first)
 * @param {number[]} arr2 - Second negabinary number (MSB first)
 *
 * @returns {number[]} - Sum in negabinary (MSB first)
 */
const addNegabinary = (arr1, arr2) => {
  // Initialize pointers for arr1 and arr2 to their last indices (LSB position)
  let i = arr1.length - 1,
    j = arr2.length - 1
  // Array to store the result digits (LSB first)
  const result = []

  // Variable to keep track of the carry in negabinary addition
  let carry = 0

  // Loop until all digits and carry are processed
  while (i >= 0 || j >= 0 || carry !== 0) {
    // Get current digit from arr1 or 0 if out of bounds
    const a = i >= 0 ? arr1[i] : 0,
      // Get current digit from arr2 or 0 if out of bounds
      b = j >= 0 ? arr2[j] : 0
    // Calculate sum of digits and carry
    const total = a + b + carry

    // Push the current digit (total mod 2) to result
    result.push(total & 1)

    // Update carry for next iteration (negabinary logic)
    carry = -(total >> 1)

    // Move to next digit (towards MSB)
    i--
    j--
  }

  // Remove leading zeros from result (except for single zero)
  while (result.length > 1 && result[result.length - 1] === 0) result.pop()

  // Reverse result to convert from LSB-first to MSB-first order
  return result.reverse()
}
