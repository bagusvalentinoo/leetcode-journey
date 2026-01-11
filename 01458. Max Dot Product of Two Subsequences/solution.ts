/**
 * Problem: 1458. Max Dot Product of Two Subsequences
 *
 * Difficulty: Hard
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Calculate maximum dot product of two subsequences
 *
 * @param nums1 - First integer array
 * @param nums2 - Second integer array
 *
 * @returns - Maximum dot product
 */
const maxDotProduct = (nums1: number[], nums2: number[]): number => {
    // Get lengths of both arrays
    const n = nums1.length
    const m = nums2.length
    
    // DP arrays for current and previous rows
    let dp: number[] = new Array(m + 1).fill(-Infinity)
    let prevDp: number[] = new Array(m + 1).fill(-Infinity)
    
    // Iterate through each element of nums1
    for (let i = 1; i <= n; i++) {
        // Iterate through each element of nums2
        for (let j = 1; j <= m; j++) {
            // Calculate product of current pair
            const currentProducts = nums1[i - 1] * nums2[j - 1]
            
            // Update dp[j] with four possibilities:
            // 1. Take only current product (start new subsequence)
            // 2. Take current product + max(0, previous best) (extend subsequence)
            // 3. Skip current element from nums1 (take from prevDp)
            // 4. Skip current element from nums2 (take from dp[j-1])
            dp[j] = Math.max(
                currentProducts,
                currentProducts + Math.max(0, prevDp[j - 1]),
                prevDp[j],
                dp[j - 1]
            )
        }
        // Copy current row to previous row for next iteration
        prevDp = [...dp]
    }
    
    // Return maximum dot product
    return dp[m]
}
