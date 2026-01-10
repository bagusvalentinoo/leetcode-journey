/**
 * Problem: 712. Minimum ASCII Delete Sum for Two Strings
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 15 ms (Beats 100%)
 */

/**
 * Calculates the minimum ASCII sum of deletions to make two strings equal
 *
 * @param s1 - The first string
 * @param s2 - The second string
 *
 * @return - The minimum ASCII sum of deletions
 */
const minimumDeleteSum = (s1: string, s2: string): number => {
    // Get lengths of both strings
    const m = s1.length
    const n = s2.length

    // Initialize DP array with cumulative ASCII sum for s2
    const dp = Array(n + 1).fill(0)
    for (let j = 1; j <= n; j++) dp[j] = dp[j - 1] + s2.charCodeAt(j - 1)

    // Iterate through each character of s1
    for (let i = 1; i <= m; i++) {
        // Store previous dp[0] value
        let prev = dp[0]
        // Update dp[0] with cumulative ASCII sum for s1
        dp[0] += s1.charCodeAt(i - 1)

        // Iterate through each character of s2
        for (let j = 1; j <= n; j++) {
            // Store current dp[j] before updating
            const temp = dp[j]

            // If characters match, no deletion needed for this pair
            if (s1.charAt(i - 1) === s2.charAt(j - 1)) dp[j] = prev
            // Characters don't match: choose minimum of two deletion options
            else {
                dp[j] = Math.min(
                    dp[j] + s1.charCodeAt(i - 1), // Delete character from s1
                    dp[j - 1] + s2.charCodeAt(j - 1) // Delete character from s2
                )
            }

            // Update prev for next iteration
            prev = temp
        }
    }

    // Return minimum deletion sum
    return dp[n]
}
