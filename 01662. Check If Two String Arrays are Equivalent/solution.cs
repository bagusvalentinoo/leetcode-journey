/**
 * Problem: 1662. Check If Two String Arrays are Equivalent
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public bool ArrayStringsAreEqual(string[] word1, string[] word2)
  {
    // Concatenate all parts of the first array into a single string
    string first = string.Concat(word1);

    // Concatenate all parts of the second array into a single string
    string second = string.Concat(word2);

    // Compare the concatenated strings for equality
    return first == second;
  }
}
