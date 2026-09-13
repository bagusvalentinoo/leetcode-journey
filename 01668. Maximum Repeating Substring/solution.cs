/**
 * Problem: 1668. Maximum Repeating Substring
 *
 * Difficulty: Easy
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int MaxRepeating(string sequence, string word)
  {
    // Return 0 early when word cannot fit inside sequence
    if (sequence.Length < word.Length) return 0;

    // Track repeating counts ending at each index
    int[] dp = new int[sequence.Length];

    // Track the maximum repeating value seen so far
    int max = 0;

    // Seed the first window when sequence starts with word
    if (sequence.Substring(0, word.Length) == word)
    {
      dp[word.Length - 1] = 1;
      max = 1;
    }

    // Scan the remaining positions for word endings
    for (int i = word.Length; i < sequence.Length; i++)
    {
      // Extend the count when word ends at the current index
      if (sequence.Substring(i - word.Length + 1, word.Length) == word)
      {
        dp[i] = dp[i - word.Length] + 1;
        max = Math.Max(max, dp[i]);
      }
    }

    // Return the maximum k-repeating value
    return max;
  }
}
