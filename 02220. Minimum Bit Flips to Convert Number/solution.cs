/**
 * Problem: 2220. Minimum Bit Flips to Convert Number
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MinBitFlips(int start, int goal)
  {
    // XOR marks each bit that differs between the two numbers
    int differingBits = start ^ goal;
    // Count the number of differing bits
    int flips = 0;

    // Remove one set bit until no differing bits remain
    while (differingBits != 0)
    {
      // Clear the lowest set bit
      differingBits &= differingBits - 1;
      // Record the required flip
      flips++;
    }

    // Return the number of required flips
    return flips;
  }
}
