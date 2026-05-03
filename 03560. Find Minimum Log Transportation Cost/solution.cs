/**
 * Problem: 3560. Find Minimum Log Transportation Cost
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public long MinCuttingCost(int n, int m, int k)
  {
    // Find the longest log
    long longest = int.Max(n, m);

    // Return 0 if the longest log fits in a truck, otherwise calculate the cost
    // to cut it into pieces that fit
    return (longest <= k) ? 0 : k * (longest - k);
  }
}
