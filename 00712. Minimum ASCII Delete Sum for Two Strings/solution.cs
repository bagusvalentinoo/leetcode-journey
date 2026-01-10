/**
 * Problem: 712. Minimum ASCII Delete Sum for Two Strings
 *
 * Difficulty: Medium
 *
 * Language: C#
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

public class Solution {
    public int MinimumDeleteSum(string s1, string s2) {
        // Get lengths of both strings
        var n = s1.Length;
        var m = s2.Length;

        // Calculate total ASCII sum of both strings
        var sum1 = 0;
        var sum2 = 0;
        for (var i = 0; i < n; ++i) {
            sum1 += s1[i];
        }
        for (var i = 0; i < m; ++i) {
            sum2 += s2[i];
        }

        // dp[i][j] stores maximum ASCII sum of common subsequence 
        // between s1[0..i-1] and s2[0..j-1]
        var dp = new int[n + 1][];
        for (var i = 0; i <= n; ++i) {
            dp[i] = new int[m + 1];
        }

        // Fill DP table to find maximum ASCII sum of common subsequence
        for (var i = 1; i <= n; ++i) {
            for (var j = 1; j <= m; ++j) {
                // If characters match, add their ASCII value to common subsequence
                if (s1[i - 1] == s2[j - 1]) {
                    // Multiply by 2 because character appears in both strings
                    dp[i][j] = dp[i - 1][j - 1] + s1[i - 1] * 2;
                }
                // Characters don't match: take maximum from previous states
                else {
                    dp[i][j] = Math.Max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // Minimum delete sum = total sum of both strings - maximum common subsequence sum
        // (Characters in common subsequence don't need to be deleted)
        return sum1 + sum2 - dp[n][m];
    }
}
