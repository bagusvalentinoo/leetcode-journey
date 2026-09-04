/**
 * Problem: 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string ModifyString(string s)
  {
    // Convert string to mutable char array
    char[] chars = s.ToCharArray();

    // Iterate through each position
    for (int i = 0; i < chars.Length; i++)
    {
      // Process only '?' placeholders
      if (chars[i] != '?') continue;

      // Try candidate letters a, b, c to find valid replacement
      for (char c = 'a'; c <= 'c'; c++)
      {
        // Check left neighbor is different (already replaced if it was '?')
        bool leftOk = i == 0 || chars[i - 1] != c;

        // Check right neighbor is different (skip if right is '?' placeholder)
        bool rightOk = i == chars.Length - 1 || chars[i + 1] != c;

        // Pick first candidate satisfying both neighbors
        if (leftOk && rightOk)
        {
          // Assign valid replacement
          chars[i] = c;
          break;
        }
      }
    }

    // Build string from char array
    return new string(chars);
  }
}
