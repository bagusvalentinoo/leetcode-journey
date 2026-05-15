/**
 * Problem: 3427. Sum of Variable Length Subarrays
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int SubarraySum(int[] nums)
  {
    // Length of the input array
    int arrayLength = nums.Length;

    // Prefix sum array to store cumulative sums
    int[] prefixSum = new int[arrayLength];

    // First element of prefix sum is the first element itself
    prefixSum[0] = nums[0];

    // Build prefix sum array: each element is sum of all previous elements
    for (int index = 1; index < arrayLength; index++)
      prefixSum[index] = prefixSum[index - 1] + nums[index];

    // Initialize total sum accumulator
    int totalSum = 0;

    // Iterate through each element as the end index
    for (int endIndex = 0; endIndex < arrayLength; endIndex++)
    {
      // Calculate start index, ensuring it's not negative
      int startIndex = Math.Max(0, endIndex - nums[endIndex]);

      // If start index is 0, sum is just prefix[endIndex]
      if (startIndex == 0)
        totalSum += prefixSum[endIndex];
      // Otherwise, sum is prefix[endIndex] minus prefix[startIndex - 1]
      else
        totalSum += (prefixSum[endIndex] - prefixSum[startIndex - 1]);
    }

    // Return the total sum
    return totalSum;
  }
}
