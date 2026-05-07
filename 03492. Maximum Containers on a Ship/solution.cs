/**
 * Problem: 3492. Maximum Containers on a Ship
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxContainers(int n, int w, int maxWeight)
  {
    // Calculate maximum containers based on grid size
    int maxByGrid = n * n;

    // Calculate maximum containers based on weight capacity
    int maxByWeight = maxWeight / w;

    // Return the smaller value
    return Math.Min(maxByGrid, maxByWeight);
  }
}
