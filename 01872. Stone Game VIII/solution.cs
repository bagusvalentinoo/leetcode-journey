/**
 * Problem: 1872. Stone Game VIII
 *
 * Difficulty: Hard
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int StoneGameVIII(int[] stones)
  {
    // Get the number of stones
    int stoneCount = stones.Length;

    // Calculate prefix sums in-place
    for (int i = 1; i < stoneCount; i++)
      stones[i] += stones[i - 1];

    // Initialize max score difference with taking all stones
    int maxScoreDiff = stones[stoneCount - 1];

    // Iterate backwards to find optimal score difference
    for (int i = stoneCount - 2; i >= 1; i--)
      maxScoreDiff = Math.Max(maxScoreDiff, stones[i] - maxScoreDiff);

    // Return the maximum score difference Alice can achieve
    return maxScoreDiff;
  }
}
