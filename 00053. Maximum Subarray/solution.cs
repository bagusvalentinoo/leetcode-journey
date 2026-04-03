/**
 * Problem: 53. Maximum Subarray
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxSubArray(int[] nums)
  {
    // Initialize max sum with first element
    int maxSum = nums[0];

    // Initialize current running sum with first element
    int currentSum = nums[0];

    // Iterate through the array starting from index 1
    for (int i = 1; i < nums.Length; i++)
    {
      // Either start new subarray at current element or extend existing subarray
      currentSum = Math.Max(nums[i], currentSum + nums[i]);
      // Update global maximum sum
      maxSum = Math.Max(maxSum, currentSum);
    }

    // Return maximum subarray sum
    return maxSum;
  }
}
