/**
 * Problem: 1300. Sum of Mutated Array Closest to Target
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

public class Solution
{
  public int FindBestValue(int[] arr, int target)
  {
    // Initialize max value to 0
    var maxValue = 0;

    // Find maximum value in array to set right boundary
    foreach (var num in arr)
      maxValue = Math.Max(maxValue, num);

    // Binary search boundaries
    var left = 0;
    var right = maxValue;

    // Track best value and its difference from target
    var bestNumber = int.MaxValue;
    var bestDifference = int.MaxValue;

    // Binary search for optimal cap value
    while (left <= right)
    {
      // Calculate mid value
      var mid = left + (right - left) / 2;

      // Calculate sum with current cap
      var currentSum = GetSumAfterMutation(arr, mid);

      // Calculate difference from target
      var currentDiff = Math.Abs(currentSum - target);

      // Update best result if current is better
      if (currentDiff < bestDifference || (currentDiff == bestDifference && mid < bestNumber))
      {
        bestNumber = mid;
        bestDifference = currentDiff;
      }

      // Adjust search range based on sum comparison
      if (currentSum < target)
        left = mid + 1;
      else
        right = mid - 1;
    }

    // Return best value
    return bestNumber;
  }

  // Helper function to calculate sum with current cap
  private int GetSumAfterMutation(int[] arr, int upperBound)
  {
    // Initialize total sum
    var totalSum = 0;

    // Sum each element, using cap if element exceeds it
    foreach (var num in arr)
      totalSum += Math.Min(num, upperBound);

    // Return total sum
    return totalSum;
  }
}
