/**
 * Problem: 1621. Number of Sets of K Non-Overlapping Line Segments
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  static const long long MOD = 1000000007LL;

  // Modular exponentiation helper using binary exponentiation
  long long modPow(long long baseValue, long long exponent) {
    // Initialize result to identity element
    long long result = 1;

    // Process each bit of the exponent
    while (exponent > 0) {
      // Multiply result by base when current bit is set
      if (exponent & 1LL)
        result = result * baseValue % MOD;

      // Square the base for the next bit
      baseValue = baseValue * baseValue % MOD;

      // Shift exponent right to consume the processed bit
      exponent >>= 1LL;
    }

    // Return base raised to exp modulo MOD
    return result;
  }

  int numberOfSets(int n, int k) {
    // Total items to choose from after inserting k gaps between segments
    long long total = n + k - 1;

    // Number of endpoints to pick for k segments
    long long choose = 2LL * k;

    // Use symmetry C(N, R) = C(N, N - R) to minimize loop iterations
    long long r = min(choose, total - choose);

    // Accumulate numerator product of the top r terms
    long long numerator = 1;

    // Accumulate denominator product of 1 through r
    long long denominator = 1;

    // Build C(total, r) multiplicatively to avoid large factorials
    for (long long i = 1; i <= r; ++i) {
      numerator = numerator * (total - r + i) % MOD;
      denominator = denominator * i % MOD;
    }

    // Compute modular inverse of denominator via Fermat's little theorem
    long long inverseDenominator = modPow(denominator, MOD - 2);

    // Divide numerator by denominator under modulo
    return static_cast<int>(numerator * inverseDenominator % MOD);
  }
};
