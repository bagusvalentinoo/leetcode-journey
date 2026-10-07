/**
 * Problem: 1952. Three Divisors
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Determines whether an integer has exactly three positive divisors
 *
 * @param {number} n - Integer to evaluate
 *
 * @returns {boolean} Whether the integer has exactly three divisors
 */
const isThree = (n) => {
  // Count the positive divisors found while examining divisor pairs
  let divisorCount = 0

  // Check every possible divisor up to the square root of n
  for (let divisor = 1; divisor * divisor <= n; divisor++) {
    // Skip values that do not divide n evenly
    if (n % divisor !== 0) continue

    // A square root contributes one divisor instead of a pair
    if (divisor * divisor === n) divisorCount++
    // Every other divisor has a distinct matching divisor
    else divisorCount += 2

    // Return false once more than three divisors are found
    if (divisorCount > 3) return false
  }

  // Return whether exactly three positive divisors were found
  return divisorCount === 3
}
