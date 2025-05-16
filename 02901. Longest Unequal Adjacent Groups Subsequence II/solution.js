/**
 * Problem: 2901. Longest Unequal Adjacent Groups Subsequence II
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 39 ms (Beats 100%)
 */

/**
 * Finds the longest subsequence of words with unequal adjacent groups and Hamming distance 1
 *
 * @param {string[]} words - The array of words
 * @param {number[]} groups - The array of group values
 *
 * @returns {string[]} - The longest valid subsequence of words
 */
const getWordsInLongestSubsequence = (words, groups) => {
  // Get the number of words
  const n = words.length

  // Initialize variables to track maximum subsequence length and starting index
  let maxLength = 1
  let startIndex = 0

  // dp[i] represents the length of longest valid subsequence ending at index i
  const dp = new Uint16Array(n).fill(1)
  // path[i] stores the next index in the optimal subsequence
  const path = new Uint16Array(n)

  for (let i = n - 1; i >= 0; i--) {
    const currentWord = words[i]

    for (let j = i + 1; j < n; j++) {
      // Skip if words are in the same group
      if (groups[i] === groups[j]) continue

      const nextWord = words[j]

      // Words must be of same length
      if (currentWord.length !== nextWord.length) continue

      // Check if Hamming distance is exactly 1
      let diffCount = 0
      let k = 0

      while (k < currentWord.length && diffCount <= 1) {
        if (currentWord[k] !== nextWord[k]) diffCount++
        k++
      }

      // Skip if Hamming distance is not 1
      if (diffCount !== 1) continue

      const potentialLength = dp[j] + 1

      // Update if we found a longer subsequence through j
      if (potentialLength > dp[i]) {
        dp[i] = potentialLength
        path[i] = j
      }

      // Track the index with maximum subsequence length
      if (dp[i] > dp[startIndex]) startIndex = i
    }
  }

  // Get the maximum length
  maxLength = dp[startIndex]

  // Build the result array by following the path
  const result = new Array(maxLength)
  let currentIndex = startIndex

  for (let i = 0; i < maxLength; i++) {
    result[i] = words[currentIndex]
    currentIndex = path[currentIndex]
  }

  return result
}
