/**
 * Problem: 1312. Minimum Insertion Steps to Make a String Palindrome
 *
 * Difficulty: Hard
 *
 * Language: C#
 *
 * Performance: Runtime - 5 ms (Beats 100%)
 */

public class Solution
{
  public int MinInsertions(string s)
  {
    // Get string length
    int n = s.Length;

    // DP array where dp[j] stores minimum insertions for substring s[i..j] at current i
    int[] dp = new int[n];

    // Iterate from second last character down to first
    for (int i = n - 2; i >= 0; i--)
    {
      // Store previous value before it gets overwritten
      int prev = 0;

      // Iterate from i+1 to end of string
      for (int j = i + 1; j < n; j++)
      {
        // Save current dp[j] before updating
        int cur = dp[j];

        // If characters match, no extra insertion needed for these ends
        if (s[i] == s[j])
          dp[j] = prev;
        // If characters differ, need 1 insertion plus minimum of two possibilities:
        // - Insert at left to match right (dp[j])
        // - Insert at right to match left (dp[j-1])
        else
          dp[j] = Math.Min(dp[j], dp[j - 1]) + 1;

        // Update prev for next iteration
        prev = cur;
      }
    }

    // Result is stored at last position
    return dp[n - 1];
  }
}
