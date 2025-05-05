/**
 * Problem: 14. Longest Common Prefix
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Find the longest common prefix string amongst an array of strings
 *
 * @param {string[]} strs - Array of strings
 *
 * @returns {string} - Longest common prefix
 */
const longestCommonPrefix = (strs) => {
  // Return empty string if input array is empty
  if (!strs.length) return ''

  // Initialize prefix with the first string
  let prefix = strs[0]

  // Iterate through the rest of the strings
  for (let i = 1; i < strs.length; i++) {
    // Reduce prefix until it matches the start of the current string
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1)

      // Return empty string if no common prefix exists
      if (!prefix) return ''
    }
  }

  // Return the longest common prefix
  return prefix
}
