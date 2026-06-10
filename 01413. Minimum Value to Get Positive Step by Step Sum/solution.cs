/**
 * Problem: 1413. Minimum Value to Get Positive Step by Step Sum
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinStartValue(int[] nums)
  {
    // Variable to store running prefix sum
    int runningPrefixSum = 0;
    // Variable to track minimum prefix sum encountered
    int minimumPrefix = int.MaxValue;

    // Calculate prefix sums and find the minimum
    for (int i = 0; i < nums.Length; i++)
    {
      // Add current element to running prefix sum
      runningPrefixSum += nums[i];

      // Update minimum prefix sum if current is smaller
      if (runningPrefixSum < minimumPrefix)
        minimumPrefix = runningPrefixSum;
    }

    // Start value must be at least 1, and also enough to offset negative minimum
    return Math.Max(1, 1 - minimumPrefix);
  }
}
