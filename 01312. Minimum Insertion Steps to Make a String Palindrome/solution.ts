/**
 * Problem: 1312. Minimum Insertion Steps to Make a String Palindrome
 *
 * Difficulty: Hard
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 17 ms (Beats 100%)
 */

/**
 * Calculates minimum insertions to make string palindrome
 *
 * @param s - Input string
 *
 * @returns Minimum insertions needed
 */
const minInsertions = (s: string): number => {
  // Get string length
  const n: number = s.length

  // DP array where dp[j] stores minimum insertions for substring s[i..j] at current i
  const dp: number[] = new Array(n).fill(0)

  // Iterate from second last character down to first
  for (let i: number = n - 2; i >= 0; i--) {
    // Store previous value before it gets overwritten
    let prev: number = 0

    // Iterate from i+1 to end of string
    for (let j: number = i + 1; j < n; j++) {
      // Save current dp[j] before updating
      const cur: number = dp[j]

      // If characters match, no extra insertion needed for these ends
      if (s[i] === s[j]) dp[j] = prev
      // If characters differ, need 1 insertion plus minimum of two possibilities:
      // - Insert at left to match right (dp[j])
      // - Insert at right to match left (dp[j-1])
      else dp[j] = Math.min(dp[j], dp[j - 1]) + 1

      // Update prev for next iteration
      prev = cur
    }
  }

  // Result is stored at last position
  return dp[n - 1]
}
