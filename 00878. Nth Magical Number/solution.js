/**
 * Problem: 878. Nth Magical Number
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%), Memory - 51.86 MB (100.00%)
 */

/**
 * Finds the nth magical number divisible by either a or b
 *
 * @param {number} n - The position of the magical number to find
 * @param {number} a - The first divisor
 * @param {number} b - The second divisor
 *
 * @returns {number} - The nth magical number modulo 1e9 + 7
 */
const nthMagicalNumber = (n, a, b) => {
  const MOD = 1e9 + 7

  // Helper function to compute the greatest common divisor (GCD)
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y))

  // Compute the least common multiple (LCM)
  const lcm = (x, y) => (x / gcd(x, y)) * y

  // Binary search to find the nth magical number
  let low = 1
  let high = n * Math.min(a, b)
  const lcmValue = lcm(a, b)

  // Perform binary search
  while (low < high) {
    // Calculate the middle point
    const mid = Math.floor((low + high) / 2)
    const count =
      Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / lcmValue)

    // Adjust the search range based on the count
    if (count < n) low = mid + 1
    else high = mid
  }

  // Return the result modulo 1e9 + 7
  return low % MOD
}
