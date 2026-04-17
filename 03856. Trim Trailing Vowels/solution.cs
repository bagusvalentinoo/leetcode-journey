/**
 * Problem: 3856. Trim Trailing Vowels
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public string TrimTrailingVowels(string s)
  {
    // HashSet for O(1) vowel lookup
    var vowelSet = new HashSet<char> { 'a', 'e', 'i', 'o', 'u' };

    // Start from the end of the string
    int index = s.Length - 1;

    // Move backwards while current character is a vowel
    for (; index > -1; index--)
    {
      // If current character is not a vowel, stop
      if (!vowelSet.Contains(s[index]))
        break;
    }

    // Return substring from start to last non-vowel character
    return s.Substring(0, index + 1);
  }
}
