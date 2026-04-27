/**
 * Problem: 1403. Minimum Subsequence in Non-Increasing Order
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public IList<int> MinSubsequence(int[] nums)
  {
    // Sort the array in ascending order
    Array.Sort(nums);

    // Reverse the array to get descending order (largest to smallest)
    Array.Reverse(nums);

    // Initialize variable to store the sum of all elements
    int totalSum = 0;

    // Iterate through each element in the array to calculate total sum
    foreach (int num in nums)
      totalSum += num;

    // Track sum of the current subsequence
    int subsequenceSum = 0;

    // List to store the resulting subsequence
    List<int> result = new List<int>();

    // Iterate through sorted array from largest to smallest
    for (int i = 0; i < nums.Length; i++)
    {
      // Add current element to subsequence sum
      subsequenceSum += nums[i];

      // Add current element to result list
      result.Add(nums[i]);

      // If subsequence sum exceeds remaining sum, return result
      if (subsequenceSum > totalSum - subsequenceSum)
        return result;
    }

    // Return the result (should not reach here under normal conditions)
    return result;
  }
}
