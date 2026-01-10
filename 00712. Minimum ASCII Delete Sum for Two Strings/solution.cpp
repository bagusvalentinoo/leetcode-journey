/**
 * Problem: 712. Minimum ASCII Delete Sum for Two Strings
 *
 * Difficulty: Medium
 *
 * Language: C++
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

class Solution {
public:
    // Helper function for memoized recursion
    int helper(string& s1, string& s2, int i, int j, vector<vector<int>>& dp) {
        int n = s1.size();
        int m = s2.size();

        // Base case 1: reached end of s1
        if (i == n) {
            int sum = 0;
            // Sum remaining characters in s2 (all need to be deleted)
            for (int k = j; k < m; k++) {
                sum += s2[k];
            }
            return sum;
        }

        // Base case 2: reached end of s2
        if (j == m) {
            int sum = 0;
            // Sum remaining characters in s1 (all need to be deleted)
            for (int k = i; k < n; k++) {
                sum += s1[k];
            }
            return sum;
        }

        // Return memoized result if available
        if (dp[i][j] != -1) return dp[i][j];

        // Initialize match and notmatch with high values
        int match = 1e9;
        int notmatch = 1e9;

        // If characters match, move to next characters in both strings
        if (s1[i] == s2[j]) {
            match = helper(s1, s2, i + 1, j + 1, dp);
        }
        // Characters don't match: choose minimum of two deletion options
        else {
            // Option 1: Delete current character from s1
            int deleteFromS1 = s1[i] + helper(s1, s2, i + 1, j, dp);
            // Option 2: Delete current character from s2
            int deleteFromS2 = s2[j] + helper(s1, s2, i, j + 1, dp);
            notmatch = min(deleteFromS1, deleteFromS2);
        }

        // Memoize and return minimum result
        return dp[i][j] = min(match, notmatch);
    }

    // Main function to calculate minimum ASCII delete sum
    int minimumDeleteSum(string s1, string s2) {
        int n = s1.size();
        int m = s2.size();
        // Initialize DP table with -1 (uncomputed)
        vector<vector<int>> dp(n + 1, vector<int>(m + 1, -1));
        // Start recursion from beginning of both strings
        return helper(s1, s2, 0, 0, dp);
    }
};
