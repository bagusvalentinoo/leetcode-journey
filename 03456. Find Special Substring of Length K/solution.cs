/**
 * Problem: 3456. Find Special Substring of Length K
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool HasSpecialSubstring(string s, int k)
  {
    // Initialize with first character
    char currentChar = s[0];

    // Count of consecutive occurrences of current character
    int currentCount = 1;

    // Iterate through the string starting from second character
    for (int i = 1; i < s.Length; i++)
    {
      // If current character matches previous, increment count
      if (s[i] == currentChar)
        currentCount++;
      // If character changes
      else
      {
        // Check if previous run had exactly k characters
        if (currentCount == k)
          return true;

        // Start new run with new character
        currentChar = s[i];
        currentCount = 1;
      }
    }

    // Check the last run after loop ends
    if (currentCount == k)
      return true;

    // No run of length k found
    return false;
  }
}
