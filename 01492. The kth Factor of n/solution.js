/**
 * Problem: 1492. The kth Factor of n
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Finds the k-th factor of a number n in ascending order
 *
 * @param {number} n - The number to find factors of
 * @param {number} k - The position of the factor (1-indexed)
 *
 * @returns {number} The k-th factor, or -1 if not found
 */
const kthFactor = (n, k) => {
  // Counter for factors found
  let factorCount = 0

  // Iterate through all possible factors from 1 to n
  for (let i = 1; i <= n; i++) {
    // Check if i is a factor of n
    if (n % i === 0) {
      // Increment factor counter
      factorCount++

      // If we've found the k-th factor, return it
      if (factorCount === k) return i
    }
  }

  // Return -1 if k exceeds the total number of factors
  return -1
}
