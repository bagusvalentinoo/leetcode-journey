/**
 * Problem: 1763. Longest Nice Substring
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  private class Set
  {
    private bool[] low, hi;

    public Set(string s)
    {
      // Initialize presence tables for lowercase and uppercase letters
      low = new bool[26];
      hi = new bool[26];

      // Record each character in its case table
      for (int i = 0; i < s.Length; i++)
      {
        // Mark lowercase character as seen
        if (s[i] >= 'a' && s[i] <= 'z') low[s[i] - 'a'] = true;
        // Mark uppercase character as seen
        if (s[i] >= 'A' && s[i] <= 'Z') hi[s[i] - 'A'] = true;
      }
    }

    public bool In(char x)
    {
      // Look up lowercase character in low table
      if (x >= 'a' && x <= 'z') return low[x - 'a'];

      // Look up uppercase character in high table
      return hi[x - 'A'];
    }
  }

  private char Swapcase(char x)
  {
    // Convert lowercase to uppercase
    if (x >= 'a' && x <= 'z') return (char)(x - 'a' + 'A');
    // Convert uppercase to lowercase
    if (x >= 'A' && x <= 'Z') return (char)(x - 'A' + 'a');

    // Return non letters unchanged
    return x;
  }

  public string LongestNiceSubstring(string s)
  {
    // Nice substring needs at least 2 chars for both cases
    if (s.Length < 2) return "";

    // Collect characters of current substring into case tables
    Set charSet = new Set(s);

    // Find first character missing its opposite case counterpart
    for (int i = 0; i < s.Length; i++)
    {
      // Split when counterpart is missing since no nice substring can cross it
      if (!charSet.In(Swapcase(s[i])))
      {
        // Solve left half before the bad character
        string left = "";
        if (i > 0) left = LongestNiceSubstring(s.Substring(0, i));

        // Solve right half after the bad character
        string right = "";
        if (i < s.Length - 1) right = LongestNiceSubstring(s.Substring(i + 1));

        // Return longer half, left wins ties for earliest occurrence
        return left.Length >= right.Length ? left : right;
      }
    }

    // Whole substring is nice when every character has its counterpart
    return s;
  }
}
