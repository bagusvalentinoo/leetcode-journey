/**
 * Problem: 1458. Max Dot Product of Two Subsequences
 *
 * Difficulty: Hard
 *
 * Language: C#
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

public class Solution {
    public int MaxDotProduct(int[] nums1, int[] nums2) {
        // Get lengths of both arrays
        int m = nums1.Length;
        int n = nums2.Length;

        // Space-optimized DP array (only need previous row)
        int[] dp = new int[n + 1];

        // Initialize DP array with minimum value to enforce non-empty subsequence
        for (int j = 0; j <= n; j++) {
            dp[j] = int.MinValue;
        }

        // Process each element of nums1
        for (int i = 1; i <= m; i++) {
            // prev stores dp[i-1][j-1] from previous iteration
            int prev = int.MinValue;
            
            // Process each element of nums2
            for (int j = 1; j <= n; j++) {
                // Store current dp[j] before updating (dp[i-1][j])
                int temp = dp[j];

                // Calculate product of current pair
                int product = nums1[i - 1] * nums2[j - 1];

                // Update dp[j] with four possibilities:
                // 1. Start new subsequence with current product
                // 2. Extend previous subsequence (add to prev)
                // 3. Skip current element from nums1 (keep dp[j])
                // 4. Skip current element from nums2 (keep dp[j-1])
                dp[j] = Math.Max(
                    product, // Start new subsequence
                    Math.Max(
                        prev == int.MinValue ? product : prev + product, // Extend or start
                        Math.Max(
                            dp[j],     // Skip current from nums1
                            dp[j - 1]  // Skip current from nums2
                        )
                    )
                );

                // Update prev for next iteration
                prev = temp;
            }
        }

        // Return maximum dot product
        return dp[n];
    }
}
