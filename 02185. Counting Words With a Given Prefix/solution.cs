/**
 * Problem: 2185. Counting Words With a Given Prefix
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int PrefixCount(string[] words, string pref)
  {
    // Count words that start with the required prefix
    int count = 0;

    // Check every word for the prefix
    foreach (string word in words)
    {
      // Increment the count when the word starts with the prefix
      if (word.StartsWith(pref)) count++;
    }

    // Return the number of matching words
    return count;
  }
}
