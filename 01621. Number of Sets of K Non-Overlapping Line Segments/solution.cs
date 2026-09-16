/**
 * Problem: 1621. Number of Sets of K Non-Overlapping Line Segments
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  private const long Mod = 1000000007;

  // Modular exponentiation helper using binary exponentiation
  private long ModPow(long baseValue, long exponent)
  {
    // Initialize result to identity element
    long result = 1;

    // Process each bit of the exponent
    while (exponent > 0)
    {
      // Multiply result by base when current bit is set
      if ((exponent & 1L) == 1L) result = result * baseValue % Mod;

      // Square the base for the next bit
      baseValue = baseValue * baseValue % Mod;

      // Shift exponent right to consume the processed bit
      exponent >>= 1;
    }

    // Return base raised to exp modulo Mod
    return result;
  }

  public int NumberOfSets(int n, int k)
  {
    // Total items to choose from after inserting k gaps between segments
    long total = n + k - 1;

    // Number of endpoints to pick for k segments
    long choose = 2L * k;

    // Use symmetry C(N, R) = C(N, N - R) to minimize loop iterations
    long r = Math.Min(choose, total - choose);

    // Accumulate numerator product of the top r terms
    long numerator = 1;

    // Accumulate denominator product of 1 through r
    long denominator = 1;

    // Build C(total, r) multiplicatively to avoid large factorials
    for (long i = 1; i <= r; i++)
    {
      numerator = numerator * (total - r + i) % Mod;
      denominator = denominator * i % Mod;
    }

    // Compute modular inverse of denominator via Fermat's little theorem
    long inverseDenominator = ModPow(denominator, Mod - 2);

    // Divide numerator by denominator under modulo
    return (int)(numerator * inverseDenominator % Mod);
  }
}
