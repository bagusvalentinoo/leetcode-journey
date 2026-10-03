/**
 * Problem: 32. Longest Valid Parentheses
 *
 * Difficulty: Hard
 *
 * Language: C#
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

public class Solution
{
  public int LongestValidParentheses(string s)
  {
    // Input length and longest valid length found
    int n = s.Length, maxLen = 0;

    // dp[i] holds longest valid length ending before position i
    Span<int> dp = stackalloc int[n + 1];

    // Scan each position for closings that complete a valid block
    for (int i = 0; i < n; i++)
    {
      char ch = s[i];

      if (ch == ')')
      {
        // Locate possible matching opening bracket before previous block
        int ind = i - 1 - dp[i];

        if (ind >= 0 && s[ind] == '(')
        {
          dp[i + 1] = i - ind + 1;

          // Attach earlier valid block ending before the match
          if (ind >= 1) dp[i + 1] += dp[ind];
        }

        maxLen = Math.Max(maxLen, dp[i + 1]);
      }
    }

    // Return the maximum length found
    return maxLen;
  }
}
