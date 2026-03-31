/**
 * Problem: 1326. Minimum Number of Taps to Open to Water a Garden
 *
 * Difficulty: Hard
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinTaps(int n, int[] ranges)
  {
    // Array to store farthest reach from each starting point
    int[] reachFromStart = new int[n + 1];

    // Build reach array: for each tap, update farthest reach from its leftmost coverage
    for (int i = 0; i <= n; i++)
    {
      // Calculate left and right coverage boundaries for current tap
      int left = Math.Max(0, i - ranges[i]),
        right = Math.Min(n, i + ranges[i]);

      // Store the maximum right coverage starting from left position
      reachFromStart[left] = Math.Max(reachFromStart[left], right);
    }

    // Greedy interval covering variables
    int tapsCount = 0,
      currentEnd = 0,
      farthestReach = 0;

    // Iterate through each position from 0 to n
    for (int i = 0; i <= n; i++)
    {
      // If current position exceeds farthest reach, impossible
      if (i > farthestReach)
        return -1;

      // Update farthest reach from current position
      farthestReach = Math.Max(farthestReach, reachFromStart[i]);

      // When we reach the end of current coverage segment
      if (i == currentEnd)
      {
        // If not at the end of garden yet
        if (i != n)
        {
          // Select a new tap and extend coverage
          tapsCount++;
          currentEnd = farthestReach;
        }
      }
    }

    // Return the minimum number of taps needed
    return tapsCount;
  }
}
