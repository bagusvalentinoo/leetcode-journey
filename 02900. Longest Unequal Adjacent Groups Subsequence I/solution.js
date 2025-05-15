/**
 * Problem: 2900. Longest Unequal Adjacent Groups Subsequence I
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Returns the longest subsequence of words with alternating groups
 *
 * @param {string[]} words - Array of words
 * @param {number[]} groups - Binary group indicators
 *
 * @returns {string[]} - Longest alternating subsequence
 */
const getLongestSubsequence = (words, groups) => {
  // Initialize empty result array
  const result = []

  // Return empty array for empty input
  if (words.length === 0) return result

  // Add first word to result
  result.push(words[0])

  // Track the group of the last added word
  let lastGroup = groups[0]

  // Iterate through remaining words
  for (let i = 1; i < groups.length; i++) {
    // Only add words that change the group
    if (groups[i] !== lastGroup) {
      result.push(words[i])
      lastGroup = groups[i]
    }
  }

  // Return the alternating subsequence
  return result
}
