/**
 * Problem: 1023. Camelcase Matching
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Matches queries against a camelCase pattern.
 *
 * @param {string[]} queries - Array of query strings to test
 * @param {string} pattern - CamelCase pattern to match
 * @returns {boolean[]} - Array indicating if each query matches the pattern
 */
const camelMatch = (queries, pattern) => {
  const patternLength = pattern.length

  return queries.map((query) => {
    // Track current position in the pattern being matched
    let patternIndex = 0
    for (const char of query) {
      if (pattern[patternIndex] === char) {
        patternIndex++
      } else if (char === char.toUpperCase()) {
        return false
      }
    }

    return patternIndex === patternLength
  })
}
