/**
 * Problem: 1621. Number of Sets of K Non-Overlapping Line Segments
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

const mod = 1000000007

// Modular exponentiation helper using binary exponentiation
func modPow(baseValue, exponent int64) int64 {
  // Initialize result to identity element
  result := int64(1)

  // Process each bit of the exponent
  for exponent > 0 {
    // Multiply result by base when current bit is set
    if exponent&1 == 1 {
      result = result * baseValue % mod
    }

    // Square the base for the next bit
    baseValue = baseValue * baseValue % mod

    // Shift exponent right to consume the processed bit
    exponent >>= 1
  }

  // Return base raised to exp modulo mod
  return result
}

func numberOfSets(n int, k int) int {
  // Total items to choose from after inserting k gaps between segments
  total := int64(n + k - 1)

  // Number of endpoints to pick for k segments
  choose := int64(2 * k)

  // Use symmetry C(N, R) = C(N, N - R) to minimize loop iterations
  r := choose
  if total-choose < r {
    r = total - choose
  }

  // Accumulate numerator product of the top r terms
  numerator := int64(1)

  // Accumulate denominator product of 1 through r
  denominator := int64(1)

  // Build C(total, r) multiplicatively to avoid large factorials
  for i := int64(1); i <= r; i++ {
    numerator = numerator * (total - r + i) % mod
    denominator = denominator * i % mod
  }

  // Compute modular inverse of denominator via Fermat's little theorem
  inverseDenominator := modPow(denominator, mod-2)

  // Divide numerator by denominator under modulo
  return int(numerator * inverseDenominator % mod)
}
