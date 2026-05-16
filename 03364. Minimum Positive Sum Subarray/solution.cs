/**
 * Problem: 3364. Minimum Positive Sum Subarray
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinimumSumSubarray(int[] nums, int l, int r)
  {
    // Initialize minimum sum to maximum integer value
    int minPositiveSum = int.MaxValue;
    // Get the size of the input array
    int arraySize = nums.Length;

    // Iterate through each possible starting index
    for (int startIdx = 0; startIdx < arraySize; startIdx++)
    {
      // Initialize sum for current subarray
      int currentSum = 0;
      // Counter for subarray length
      int subarrayLength = 0;

      // Expand subarray from startIdx to endIdx
      for (int endIdx = startIdx; endIdx < arraySize; endIdx++)
      {
        // Add current element to sum
        currentSum += nums[endIdx];
        // Increment subarray length counter
        subarrayLength++;

        // Check if subarray length is within the allowed range [l, r]
        if (subarrayLength >= l && subarrayLength <= r)
        {
          // If sum is positive, update minimum
          if (currentSum > 0)
            minPositiveSum = Math.Min(minPositiveSum, currentSum);
          // If we've reached maximum length, stop expanding
          if (subarrayLength == r)
            break;
        }
      }
    }

    // Return -1 if no positive sum found
    if (minPositiveSum == int.MaxValue)
      return -1;

    // Return the minimum positive sum
    return minPositiveSum;
  }
}
