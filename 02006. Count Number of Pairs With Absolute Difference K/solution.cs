/**
 * Problem: 2006. Count Number of Pairs With Absolute Difference K
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountKDifference(int[] nums, int k)
  {
    // Create frequency array for values up to 100
    int[] frequencies = new int[101];
    // Counter for pairs with absolute difference k
    int pairsCount = 0;

    // Iterate over each number in the array
    foreach (int num in nums)
    {
      // Check for previous number smaller by k
      if (num - k > 0)
        // Add count of matching smaller values
        pairsCount += frequencies[num - k];

      // Check for previous number larger by k within bounds
      if (num + k > 0 && num + k < 101)
        // Add count of matching larger values
        pairsCount += frequencies[num + k];

      // Record current number in frequency array
      frequencies[num]++;
    }

    // Return the total number of pairs with difference k
    return pairsCount;
  }
}
