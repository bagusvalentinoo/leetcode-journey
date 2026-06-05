/**
 * Problem: 1385. Find the Distance Value Between Two Arrays
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int FindTheDistanceValue(int[] arr1, int[] arr2, int d)
  {
    // Create a span to store prefix sums (size covers range -1100 to 1101)
    Span<int> prefixSums = stackalloc int[2202];

    // Mark positions where values from arr2 exist (shifted by +1101 to handle negative indices)
    foreach (int value in arr2)
      prefixSums[value + 1101] |= 1;

    // Build prefix sum array to enable O(1) range queries
    for (int i = 1; i < 2202; i++)
      prefixSums[i] += prefixSums[i - 1];

    // Counter for valid elements in arr1
    int validElementCount = 0;

    // Check each element in arr1
    foreach (int currentValue in arr1)
    {
      // Calculate the range [currentValue - d, currentValue + d] shifted by +1101
      int leftBoundary = currentValue + 1100 - d,
        rightBoundary = currentValue + 1101 + d;

      // If no elements from arr2 fall within this range, currentValue is valid
      if (prefixSums[rightBoundary] - prefixSums[leftBoundary] == 0)
        validElementCount++;
    }

    // Return total count of valid elements
    return validElementCount;
  }
}
