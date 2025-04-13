/**
 * Problem: 1922. Count Good Numbers
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts good digit strings of length n
 *
 * @param {number} n - Length of the digit string
 *
 * @returns {number} - The total number of good digit strings modulo 10^9 + 7
 */
const countGoodNumbers = (n) => {
  // Modulus
  const MOD = 1000000007n

  // Modular exponentiation function
  /**
   * Computes (base^exp) % mod efficiently
   *
   * @param {number} base - The base number
   * @param {number} exp - The exponent
   *
   * @returns {number} - The result of (base^exp) % mod
   */
  const modPow = (base, exp) => {
    // Convert inputs to BigInt
    base = BigInt(base)
    exp = BigInt(exp)
    let result = 1n

    // Modular exponentiation
    while (exp > 0) {
      // If exp is odd, multiply result by base
      if (exp % 2n === 1n) result = (result * base) % MOD

      // Square the base
      base = (base * base) % MOD
      // Halve the exponent
      exp = exp / 2n
    }

    return result
  }

  // Calculate number of even and odd positions
  const numEven = BigInt(Math.floor(n / 2))
  const numOdd = BigInt(Math.ceil(n / 2))

  // Compute even and odd parts
  const evenPart = modPow(5n, numOdd) // positions at 0, 2, 4...
  const oddPart = modPow(4n, numEven) // positions at 1, 3, 5...

  // Return result
  return Number((evenPart * oddPart) % MOD)
}
