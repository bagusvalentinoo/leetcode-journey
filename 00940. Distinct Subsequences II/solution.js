/**
 * Problem: 940. Distinct Subsequences II
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Counts distinct non-empty subsequences of a string
 *
 * @param {string} s - Input string
 *
 * @returns {number} - Result modulo 10^9 + 7
 */
const distinctSubseqII = (s) => {
  // Define the length of the string and the modulo value
  const n = s.length,
    MOD = 1e9 + 7

  /**
   * Initialize dp array to store the number of distinct subsequences
   * and last array to track the last occurrence of each character
   */
  const dp = Array(n + 1).fill(0),
    last = Array(26).fill(-1)

  // Base case: there's one way to form an empty subsequence
  dp[0] = 1

  // Iterate through each character in the string
  for (let i = 1; i <= n; i++) {
    // Get the character's index (0-25) based on its ASCII value
    const c = s.charCodeAt(i - 1) - 97

    // Calculate the number of distinct subsequences ending at this character
    dp[i] = (dp[i - 1] * 2) % MOD

    // If the character has appeared before, subtract the count of subsequences
    if (last[c] !== -1) dp[i] = (dp[i] - dp[last[c]] + MOD) % MOD

    // Update the last occurrence of the character
    last[c] = i - 1
  }

  // Return the total number of distinct non-empty subsequences
  return (dp[n] - 1 + MOD) % MOD
}
