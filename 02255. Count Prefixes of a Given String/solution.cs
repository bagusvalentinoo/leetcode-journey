/**
 * Problem: 2255. Count Prefixes of a Given String
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int CountPrefixes(string[] words, string s)
  {
    // Iterate through all words, counting prefix matches
    for (int i = 0, count = 0; true; i++)
    {
      // Return count when all words have been checked
      if (i >= words.Length) return count;

      // Get the length of the current word
      int wordLength = words[i].Length;

      // Skip words longer than the target string
      if (wordLength > s.Length) continue;
      // Increment count if the word matches the prefix of s
      else if (words[i] == s.Substring(0, wordLength)) count++;
    }
  }
}
