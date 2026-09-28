/**
 * Problem: 1876. Substrings of Size Three with Distinct Characters
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountGoodSubstrings(string s)
  {
    // Store count of good substrings
    int goodCount = 0;

    // Get string length for loop boundary
    int stringLength = s.Length;

    // Check each window of three consecutive characters
    for (int i = 0; i + 2 < stringLength; i++)
    {
      // Read the three characters in current window
      char first = s[i], second = s[i + 1], third = s[i + 2];

      // Count window when all three characters are pairwise distinct
      if (first != second && first != third && second != third) goodCount++;
    }

    // Return total number of good substrings
    return goodCount;
  }
}
