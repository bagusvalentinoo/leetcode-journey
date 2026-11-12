/**
 * Problem: 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int LongestMonotonicSubarray(int[] nums)
  {
    // Track the lengths ending at the current element for both directions
    int increasingLength = 1, decreasingLength = 1, longestLength = 1;

    // Compare each element with its predecessor
    for (int i = 1; i < nums.Length; i++)
    {
      // Extend or reset the increasing sequence
      increasingLength = nums[i] > nums[i - 1] ? increasingLength + 1 : 1;
      // Extend or reset the decreasing sequence
      decreasingLength = nums[i] < nums[i - 1] ? decreasingLength + 1 : 1;
      // Keep the longest sequence seen so far
      longestLength = Math.Max(longestLength, Math.Max(increasingLength, decreasingLength));
    }

    // Return the longest monotonic subarray length
    return longestLength;
  }
}
