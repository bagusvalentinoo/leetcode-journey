/**
 * Problem: 2654. Minimum Number of Operations to Make All Array Elements Equal to 1
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution

{
  public int MinOperations(int[] nums)
  {
    // Get the length of the input array
    int n = nums.Length;

    // Variable to count the number of elements equal to 1
    int countOfOnes = 0;

    // Variable to store the greatest common divisor (GCD) of all elements
    int overallGCD = 0;

    // Iterate through the array to calculate the GCD and count elements equal to 1
    foreach (int num in nums)
    {
      if (num == 1)
      {
        countOfOnes++;
      }

      overallGCD = GCD(overallGCD, num);
    }

    // If there are elements equal to 1, return the number of non-1 elements
    if (countOfOnes > 0)
    {
      return n - countOfOnes;
    }

    // If the GCD of all elements is greater than 1, return -1 (not possible)
    if (overallGCD > 1)
    {
      return -1;
    }

    // Variable to store the minimum length of subarray with GCD equal to 1
    int minSubarrayLength = n;

    // Iterate through the array to find the minimum subarray length
    for (int i = 0; i < n; i++)
    {
      // Variable to store the GCD of the current subarray
      int currentGCD = 0;

      // Iterate through the subarray starting from index i
      for (int j = i; j < n; j++)
      {
        currentGCD = GCD(currentGCD, nums[j]);

        // If the GCD becomes 1, update the minimum subarray length
        if (currentGCD == 1)
        {
          minSubarrayLength = Math.Min(minSubarrayLength, j - i + 1);
          break;
        }
      }
    }

    // Return the result by adding the minimum subarray length and the number of operations
    return minSubarrayLength + n - 2;
  }

  // Helper method to calculate the greatest common divisor (GCD) of two numbers
  private int GCD(int a, int b)
  {
    // Use the Euclidean algorithm to calculate the GCD
    while (b != 0)
    {
      int temp = b;
      b = a % b;
      a = temp;
    }

    // Return the greatest common divisor of the two numbers
    return a;
  }
}