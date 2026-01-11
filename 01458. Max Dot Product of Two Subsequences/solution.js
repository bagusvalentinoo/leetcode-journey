/**
 * Problem: 1458. Max Dot Product of Two Subsequences
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Calculate maximum dot product of two subsequences
 *
 * @param {number[]} nums1 - First integer array
 * @param {number[]} nums2 - Second integer array
 *
 * @returns {number} - Maximum dot product
 */
const maxDotProduct = (nums1, nums2) => {
    // Get lengths of both arrays
    const m = nums1.length
    const n = nums2.length

    // Ensure nums1 is the longer array for space optimization
    if (m < n) return maxDotProduct(nums2, nums1)

    // Initialize DP array with -Infinity
    const dp = new Array(n + 1).fill(-Infinity)

    // Iterate through each element of nums1
    for (let i = 0; i < m; i++) {
        // prev stores dp[j] from previous iteration of i
        let prev = 0

        // Iterate through each element of nums2
        for (let j = 0; j < n; j++) {
            // Store current dp[j+1] before updating
            const current = dp[j + 1]

            // Update dp[j+1] with three possibilities:
            // 1. Take product with current pair + max(prev, 0)
            // 2. Skip current element from nums2 (dp[j])
            // 3. Skip current element from nums1 (current dp[j+1])
            dp[j + 1] = Math.max(
                Math.max(prev, 0) + nums1[i] * nums2[j],
                dp[j],
                dp[j + 1]
            )

            // Update prev for next iteration
            prev = current
        }
    }

    // Return maximum dot product
    return dp[n]
}
