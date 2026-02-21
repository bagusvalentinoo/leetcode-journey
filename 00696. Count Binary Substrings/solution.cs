/**
 * Problem: 696. Count Binary Substrings
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

using System.Runtime.CompilerServices;

public class Solution
{
  [MethodImpl(MethodImplOptions.AggressiveOptimization)]
  public int CountBinarySubstrings(string s)
  {
    // Initialize result accumulator
    int totalSubstrings = 0;

    // Track previous group length, current group length, and previous character
    int prevGroupLength = 0;
    int currGroupLength = 1;
    char prevChar = s[0];

    // Iterate through string starting from second character
    for (int i = 1; i < s.Length; i++)
    {
      char currentChar = s[i];

      // If character changes, we completed a group
      if (prevChar != currentChar)
      {
        // Add minimum of previous and current group lengths
        totalSubstrings += Math.Min(prevGroupLength, currGroupLength);

        // Move current group to previous, reset current group
        prevGroupLength = currGroupLength;
        currGroupLength = 0;
      }

      // Increment current group length
      currGroupLength++;

      // Update previous character
      prevChar = currentChar;
    }

    // Add final group's contribution
    return totalSubstrings + Math.Min(prevGroupLength, currGroupLength);
  }
}
