/**
 * Problem: 1848. Minimum Distance to the Target Element
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int GetMinDistance(int[] nums, int target, int start)
  {
    // Initialize minimum distance to maximum value
    int minDistance = int.MaxValue;

    // Iterate through the array
    for (int i = 0; i < nums.Length; i++)
    {
      // Check if current element matches target
      if (nums[i] == target)
        // Update minimum distance with absolute difference from start
        minDistance = Math.Min(minDistance, Math.Abs(i - start));
    }

    // Return minimum distance
    return minDistance;
  }
}
