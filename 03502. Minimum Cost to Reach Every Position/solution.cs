/**
 * Problem: 3502. Minimum Cost to Reach Every Position
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] MinCosts(int[] cost)
  {
    // Initialize result array with same length as input
    int[] minimumCosts = new int[cost.Length];

    // Fill result array with running minimum
    for (int i = 0; i < minimumCosts.Length; i++)
      // Current minimum is the smaller of:
      // - Previous minimum (if exists)
      // - Current cost value
      minimumCosts[i] = Math.Min(i > 0 ? minimumCosts[i - 1] : int.MaxValue, cost[i]);

    // Return array of minimum costs to reach each position
    return minimumCosts;
  }
}
