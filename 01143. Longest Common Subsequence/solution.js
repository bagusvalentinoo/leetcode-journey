/**
 * Problem: 1143. Longest Common Subsequence
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

/**
 * Returns the length of the longest common subsequence of two strings
 *
 * @param {string} text1 - First string
 * @param {string} text2 - Second string
 *
 * @returns {number} - Length of the longest common subsequence
 */
const longestCommonSubsequence = (text1, text2) => {
  // Initialize a dynamic programming array to store the length of LCS for each character in text1
  const dp = Array(text1.length).fill(0)
  // Variable to keep track of the longest common subsequence found so far
  let longest = 0

  // Iterate over each character in text2
  for (const charText2 of text2) {
    // Variable to store the current maximum length for the current character in text2
    let currentMaxLength = 0

    // Iterate over each character index in text1
    for (let indexText1 = 0; indexText1 < dp.length; indexText1++) {
      // Update currentMaxLength if a longer subsequence is found
      if (currentMaxLength < dp[indexText1]) currentMaxLength = dp[indexText1]
      // If characters match, update dp for this index and update longest if needed
      else if (charText2 === text1[indexText1]) {
        dp[indexText1] = currentMaxLength + 1
        longest = Math.max(longest, currentMaxLength + 1)
      }
    }
  }

  // Return the length of the longest common subsequence
  return longest
}
