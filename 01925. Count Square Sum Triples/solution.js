/**
 * Problem: 1925. Count Square Sum Triples
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts ordered triples whose squared values form a Pythagorean triple
 *
 * @param {number} n - Inclusive upper bound for each triple value
 *
 * @returns {number} Number of square triples
 */
const countTriples = (n) => {
  // Track the number of ordered square triples found
  let count = 0

  // Store the largest valid value for c squared
  const maxSquare = n * n

  // Try each possible first leg, excluding n because c must be larger
  for (let a = 1; a < n; a++) {
    // Try larger second legs to avoid checking each unordered pair twice
    for (let b = a + 1; b < n; b++) {
      // Calculate the potential value for c squared
      const sumOfSquares = a * a + b * b

      // Stop because larger values of b can only increase the sum
      if (sumOfSquares > maxSquare) break

      // Find the integer portion of the potential hypotenuse
      const c = Math.trunc(Math.sqrt(sumOfSquares))

      // Count both ordered leg arrangements when the sum is a perfect square
      if (c * c === sumOfSquares) count += 2
    }
  }

  // Return the total number of ordered square triples
  return count
}
