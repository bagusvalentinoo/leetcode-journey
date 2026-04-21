/**
 * Problem: 3827. Count Monobit Integers
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts the number of mono-bit numbers less than or equal to n
 *
 * @param {number} n - Input number
 *
 * @returns {number} Count of mono-bit numbers
 */
const countMonobit = (n) => {
  // Initialize count to 1 for the number 0
  let count = 1

  // Start with the smallest mono-bit number (1)
  let currentNum = 1

  // Generate mono-bit numbers (1, 3, 7, 15, 31, ...) until exceeding n
  while (currentNum <= n) {
    // Increment count for each valid mono-bit number found
    count++

    // Generate next mono-bit number: shift left and set least significant bit to 1
    // This creates numbers with all bits set to 1 (1 -> 3 -> 7 -> 15 -> ...)
    currentNum = (currentNum << 1) | 1
  }

  // Return total count including 0
  return count
}
