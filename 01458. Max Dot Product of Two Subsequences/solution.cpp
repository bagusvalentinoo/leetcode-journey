/**
 * Problem: 1458. Max Dot Product of Two Subsequences
 *
 * Difficulty: Hard
 *
 * Language: C++
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

class Solution {
public:
    int maxDotProduct(vector<int>& nums1, vector<int>& nums2) {
        // Get lengths of both arrays
        int n = nums1.size();
        int m = nums2.size();

        // Constant for negative infinity initialization
        const int NEG = -1e9;

        // DP table: dp[i][j] = max dot product for nums1[0..i-1] and
        // nums2[0..j-1]
        vector<vector<int>> dp(n + 1, vector<int>(m + 1, NEG));

        // Fill DP table
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                // Option 1: Take current pair and possibly extend previous
                // subsequence
                int takePair =
                    nums1[i - 1] * nums2[j - 1] + max(0, dp[i - 1][j - 1]);

                // Update dp[i][j] with maximum of three options:
                // 1. Take current pair (with optional extension)
                // 2. Skip current element from nums1
                // 3. Skip current element from nums2
                dp[i][j] = max({takePair, dp[i - 1][j], dp[i][j - 1]});
            }
        }

        // Return maximum dot product for complete arrays
        return dp[n][m];
    }
};
