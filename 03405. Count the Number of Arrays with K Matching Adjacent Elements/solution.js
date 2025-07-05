/**
 * Problem: 3405. Count the Number of Arrays with K Matching Adjacent Elements
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Modulo constant for calculations
const MOD = 1000000007n

/**
 * Computes the modular exponentiation using exponentiation by squaring
 *
 * @param {bigint} base - The base number
 * @param {number} exponent - The exponent to raise the base to
 *
 * @returns {bigint} - The result of (base ^ exponent) % MOD
 */
const power = (base, exponent) =>
  exponent & 1
    ? (power(base, exponent - 1) * base) % MOD
    : exponent
    ? power((base * base) % MOD, exponent >> 1)
    : 1n

/**
 * Computes the binomial coefficient C(n, k) modulo MOD
 *
 * @param {number} n - Total number of items
 * @param {number} k - Number of items to choose
 *
 * @returns {bigint} - The binomial coefficient C(n, k) % MOD
 */
const combination = (n, k) =>
  k > n
    ? 0n
    : (((factorials[n] * inverseFactorials[k]) % MOD) *
        inverseFactorials[n - k]) %
      MOD

// Initialize factorial calculation
let factorial = 1n
// Precompute factorials up to 100000
const factorials = [...Array(1e5)].map((x, i) =>
  i ? (factorial = (factorial * BigInt(i)) % MOD) : factorial
)

// Set exponent for modular inverse calculation
factorial = Number(MOD) - 2

// Precompute modular inverses of factorials
const inverseFactorials = factorials.map((x) => power(x, factorial))

/**
 * Counts arrays of length n with m possible values and exactly k adjacent equal pairs
 *
 * @param {number} n - Array length
 * @param {number} m - Number of possible values per element
 * @param {number} k - Required number of adjacent equal pairs
 *
 * @returns {number} - Count modulo 1000000007
 */
const countGoodArrays = (n, m, k) =>
  Number(
    (((combination(n - 1, k) * BigInt(m)) % MOD) *
      power(BigInt(m - 1), n - k - 1)) %
      MOD
  )
