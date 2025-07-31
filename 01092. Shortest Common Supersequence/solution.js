/**
 * Problem: 1092. Shortest Common Supersequence
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 38 ms (Beats 100%)
 */

/**
 * Returns the shortest common supersequence (SCS) of two strings
 *
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 *
 * @returns {string} - Shortest common supersequence
 */
const shortestCommonSupersequence = (str1, str2) => {
  // Get the lengths of both input strings
  const m = str1.length,
    n = str2.length

  // Initialize a 2D DP table to store the length of the longest common subsequence (LCS) for substrings
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  // Fill the DP table using dynamic programming to compute the LCS length
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // If current characters match, increment the LCS length from previous indices
      if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1
      // Otherwise, take the maximum LCS length from either excluding current char from str1 or str2
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }

  // Initialize pointers to traverse both strings from the end
  let i = m,
    j = n

  // Array to build the shortest common supersequence in reverse order
  const result = []

  // Backtrack through the DP table to construct the shortest common supersequence
  while (i > 0 && j > 0) {
    // If characters match, add to result and move diagonally up in DP table
    if (str1[i - 1] === str2[j - 1]) {
      result.push(str1[i - 1])
      i--
      j--
    }
    // If value above is greater, add character from str1 and move up
    else if (dp[i - 1][j] > dp[i][j - 1]) {
      result.push(str1[i - 1])
      i--
    }
    // Otherwise, add character from str2 and move left
    else {
      result.push(str2[j - 1])
      j--
    }
  }

  // Add any remaining characters from str1 to the result
  while (i > 0) {
    result.push(str1[i - 1])
    i--
  }

  // Add any remaining characters from str2 to the result
  while (j > 0) {
    result.push(str2[j - 1])
    j--
  }

  // Reverse the result array since it was built backwards, then join to form the final string
  return result.reverse().join('')
}
