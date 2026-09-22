/**
 * Problem: 1800. Maximum Ascending Subarray Sum
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxAscendingSum(int[] nums)
  {
    // Initialize max and current sums with first element
    int maxSum = nums[0], currentSum = nums[0];

    // Iterate over remaining elements to extend or restart ascending run
    for (int i = 1; i < nums.Length; i++)
      // Extend run when strictly ascending, otherwise restart from current element
      if (nums[i] > nums[i - 1])
      {
        // Add current element to ongoing ascending sum
        currentSum += nums[i];

        // Update max sum when current run exceeds it
        if (currentSum > maxSum) maxSum = currentSum;
      }
      else
      {
        // Reset current sum to current element as new run start
        currentSum = nums[i];

        // Update max sum for single element run if larger
        if (currentSum > maxSum) maxSum = currentSum;
      }

    // Return the maximum ascending subarray sum found
    return maxSum;
  }
}
