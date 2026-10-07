/**
 * Problem: 1925. Count Square Sum Triples
 *
 * Difficulty: Easy
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Count ordered triples whose squared values form a Pythagorean triple
 *
 * @param n - Inclusive upper bound for each triple value
 *
 * @returns Number of square sum triples
 */
const countTriples = (n: number): number => {
  // Return zero when the upper bound is not provided or is zero
  if (!n) return 0

  // Track the number of ordered square sum triples
  let count: number = 0

  // Try every possible first value
  for (let i: number = 1; i <= n; i++) {
    // Store the first value of the triple
    const firstNumber: number = i

    // Try second values from the first value to avoid duplicate calculations
    for (let j: number = i; j <= n; j++) {
      // Store the second value of the triple
      const secondNumber: number = j

      // Calculate the square and value of the potential third number
      const thirdNumberSquare: number = firstNumber * firstNumber + secondNumber * secondNumber
      const thirdNumber: number = Math.sqrt(thirdNumberSquare)

      // Count both ordered arrangements when the third number is valid
      if (thirdNumber <= n && thirdNumber > 0 && Number.isInteger(thirdNumber)) {
        count += 2
      } else if (thirdNumber > n) {
        // Stop when larger second values can no longer produce a valid third number
        break
      }
    }
  }

  // Return the number of ordered square sum triples
  return count
}
