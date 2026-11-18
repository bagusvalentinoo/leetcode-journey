/**
 * Problem: 2441. Largest Positive Integer That Exists With Its Negative
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int FindMaxK(int[] nums)
  {
    // Define the offset used to map values into non-negative indexes
    const int ValueOffset = 1_000;
    // Allocate a presence table for values from -1000 to 1000
    Span<bool> valueSeen = stackalloc bool[2_001];

    // Mark every value as seen using its offset index
    foreach (int value in nums) { valueSeen[value + ValueOffset] = true; }

    // Scan from the smallest negative side toward zero
    for (int negativeIndex = 0; negativeIndex <= ValueOffset; negativeIndex++)
    {
      // Return k when both -k and k are present
      if (valueSeen[negativeIndex] & valueSeen[(ValueOffset << 1) - negativeIndex])
        return ValueOffset - negativeIndex;
    }

    // Return -1 when no valid pair exists
    return -1;
  }
}
