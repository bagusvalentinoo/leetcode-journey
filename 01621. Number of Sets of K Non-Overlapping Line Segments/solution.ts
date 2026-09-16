/**
 * Problem: 1621. Number of Sets of K Non-Overlapping Line Segments
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts ways to draw k non-overlapping segments on n points via C(n + k - 1, 2k)
 *
 * @param n - Number of points on the line
 * @param k - Number of segments to draw
 *
 * @returns Number of ways modulo 1e9 + 7
 */
const numberOfSets = (n: number, k: number): number => {
  // Modulus constant for all calculations
  const MOD: bigint = 1000000007n

  // Modular exponentiation helper using binary exponentiation
  const modPow = (base: bigint, exp: bigint): bigint => {
    // Initialize result to identity element
    let result: bigint = 1n

    // Process each bit of the exponent
    while (exp > 0n) {
      // Multiply result by base when current bit is set
      if (exp & 1n) result = (result * base) % MOD

      // Square the base for the next bit
      base = (base * base) % MOD

      // Shift exponent right to consume the processed bit
      exp >>= 1n
    }

    // Return base raised to exp modulo MOD
    return result
  }

  // Total items to choose from after inserting k gaps between segments
  const total: number = n + k - 1

  // Number of endpoints to pick for k segments
  const choose: number = 2 * k

  // Use symmetry C(N, R) = C(N, N - R) to minimize loop iterations
  const r: number = Math.min(choose, total - choose)

  // Accumulate numerator product of the top r terms
  let numerator: bigint = 1n

  // Accumulate denominator product of 1 through r
  let denominator: bigint = 1n

  // Build C(total, r) multiplicatively to avoid large factorials
  for (let i = 1; i <= r; i++) {
    numerator = (numerator * BigInt(total - r + i)) % MOD
    denominator = (denominator * BigInt(i)) % MOD
  }

  // Compute modular inverse of denominator via Fermat's little theorem
  const inverseDenominator: bigint = modPow(denominator, MOD - 2n)

  // Divide numerator by denominator under modulo and convert back to number
  return Number((numerator * inverseDenominator) % MOD)
}
