/**
 * Problem: 1312. Minimum Insertion Steps to Make a String Palindrome
 *
 * Difficulty: Hard
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
  int minInsertions(string s) {
    // Get string length
    int n = s.length();

    // DP array where dp[j] stores minimum insertions for substring s[i..j] at
    // current i
    vector<int> dp(n, 0);

    // Iterate from second last character down to first
    for (int i = n - 2; i >= 0; i--) {
      // Store previous value before it gets overwritten
      int prev = 0;

      // Iterate from i+1 to end of string
      for (int j = i + 1; j < n; j++) {
        // Save current dp[j] before updating
        int cur = dp[j];

        // If characters match, no extra insertion needed for these ends
        if (s[i] == s[j])
          dp[j] = prev;
        else
          // Characters differ, need 1 insertion plus minimum of two
          // possibilities:
          // - Insert at left to match right (dp[j])
          // - Insert at right to match left (dp[j-1])
          dp[j] = min(dp[j], dp[j - 1]) + 1;

        // Update prev for next iteration
        prev = cur;
      }
    }

    // Result is stored at last position
    return dp[n - 1];
  }
};

class Solution {
public:
  // Recursive helper to find minimum insertions for substring s[i..j]
  int solve(int i, int j, string &s, int n, vector<vector<int>> &dp) {
    // Base case: single character is already palindrome
    if (i == j)
      return 0;
    // Base case: empty substring
    if (i > j)
      return 0;
    // Return memoized result if already computed
    if (dp[i][j] != -1)
      return dp[i][j];
    // If characters match, no insertion needed for these ends
    if (s[i] == s[j])
      return dp[i][j] = solve(i + 1, j - 1, s, n, dp);

    // If characters differ, need 1 insertion plus minimum of:
    // - Insert at left to match right (solve i+1, j)
    // - Insert at right to match left (solve i, j-1)
    return dp[i][j] =
               1 + min(solve(i + 1, j, s, n, dp), solve(i, j - 1, s, n, dp));
  }

  int minInsertions(string s) {
    int n = s.size();

    // DP arrays for longest palindromic subsequence
    // curr[j] stores LPS length for substring s[i..j] with current i
    // next stores previous row values
    vector<int> curr(n, 0), next(n, 0);

    // Process from bottom-right to top-left
    for (int i = n - 1; i >= 0; i--) {
      // Single character has LPS length 1
      curr[i] = 1;

      // Fill for all j > i
      for (int j = i + 1; j < n; j++) {
        if (s[i] == s[j])
          // Characters match: add 2 to LPS of inner substring
          curr[j] = 2 + next[j - 1];
        else
          // Characters differ: take max of excluding one end
          curr[j] = max(next[j], curr[j - 1]);
      }

      // Move current row to next for next iteration
      next = curr;
    }

    // Get length of longest palindromic subsequence
    int maxPalLen = curr[n - 1];

    // Minimum insertions = total length - LPS length
    return n - maxPalLen;
  }
};
