/**
 * Problem: 1356. Sort Integers by The Number of 1 Bits
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int[] SortByBits(int[] arr)
  {
    // Sort using custom comparator
    Array.Sort(
      arr,
      (a, b) =>
      {
        // Count set bits for both numbers using built-in PopCount
        int bitsA = int.PopCount(a),
          bitsB = int.PopCount(b);

        // If bit counts are equal, sort by numeric value
        if (bitsA == bitsB)
          return a - b;

        // Otherwise sort by number of bits
        return bitsA - bitsB;
      }
    );

    // Return sorted array
    return arr;
  }
}
