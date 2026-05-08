/**
 * Problem: 3487. Maximum Unique Subarray Sum After Deletion
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxSum(int[] nums)
  {
    // Boolean array to track counted numbers (assuming numbers range 0-100)
    bool[] isNumberCounted = new bool[101];

    // Accumulator for sum of unique positive numbers
    int totalSum = 0;
    // Track maximum negative number (for all-negative case)
    int maxNegativeValue = nums[0];

    // Flag to check if all numbers are negative
    bool allNumbersNegative = true;

    // Iterate through each element in the input array
    for (int index = 0; index < nums.Length; index++)
    {
      // Update maximum negative value if current number is larger
      if (nums[index] > maxNegativeValue)
        maxNegativeValue = nums[index];

      // If current number is non-negative
      if (nums[index] >= 0)
      {
        // Mark that not all numbers are negative
        allNumbersNegative = false;

        // If this number hasn't been counted yet
        if (!isNumberCounted[nums[index]])
        {
          // Add its value to total sum
          totalSum += nums[index];

          // Mark as counted to avoid duplicates
          isNumberCounted[nums[index]] = true;
        }
      }
    }

    // If all numbers are negative, return the maximum negative value
    // Otherwise, return the sum of unique non-negative numbers
    return allNumbersNegative ? maxNegativeValue : totalSum;
  }
}
