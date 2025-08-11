/**
 * Problem: 2438. Range Product Queries of Powers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

/**
 * Returns the product of selected powers of 2 from n's binary form for each query range, modulo 1e9+7
 *
 * @param {number} n - The integer to extract powers of 2 from
 * @param {number[][]} queries - Each [start, end] range of indices
 *
 * @returns {number[]} - Products for each query, modulo 1e9+7
 */
const productQueries = (n, queries) => {
  // Define the modulo constant as per problem constraints
  const MODULO = 1000000007

  // Array to store the powers of 2 present in the binary representation of n
  const powersOfTwo = []
  // Variable to keep track of the current power of 2 (starting from 1)
  let currentPower = 1

  // Extract all powers of 2 from n's binary representation
  while (n > 0) {
    // If the least significant bit is set, add the current power to the array
    if (n % 2 === 1) powersOfTwo.push(currentPower)

    // Shift n to the right by 1 (integer division by 2)
    n = Math.floor(n / 2)
    // Move to the next power of 2
    currentPower *= 2
  }

  // Get the number of powers of 2 found
  const numPowers = powersOfTwo.length
  // Precompute the products for all possible ranges and store in a 2D array
  const precomputedProducts = Array.from(
    { length: numPowers },
    () => new Array(numPowers)
  )

  // Compute the product for each possible range [i, j]
  for (let i = 0; i < numPowers; i++) {
    // Initialize the product for the current range
    let product = 1

    for (let j = i; j < numPowers; j++) {
      // Multiply by the next power and take modulo
      product = (product * powersOfTwo[j]) % MODULO

      // Store the result for range [i, j]
      precomputedProducts[i][j] = product
    }
  }

  // Array to store the final answers for each query
  const answers = []

  // For each query, retrieve the precomputed product for the given range
  for (const [start, end] of queries)
    answers.push(precomputedProducts[start][end])

  // Return the array of answers
  return answers
}
