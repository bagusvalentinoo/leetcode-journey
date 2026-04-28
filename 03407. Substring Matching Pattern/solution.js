/**
 * Problem: 3407. Substring Matching Pattern
 *
 * Difficulty: Easy
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Checks if string matches pattern with a single wildcard '*'
 *
 * @param {string} s - Input string to search in
 * @param {string} p - Pattern containing exactly one '*'
 *
 * @returns {boolean} True if pattern matches
 */
const hasMatch = (s, p) => {
  // Find the position of the wildcard '*' in the pattern
  const wildcardIndex = p.indexOf('*')

  // Extract the prefix part before and after the wildcard
  const prefixPattern = p.substring(0, wildcardIndex),
    suffixPattern = p.substring(wildcardIndex + 1)

  // Find the first occurrence of prefix in the string
  const prefixMatchIndex = s.indexOf(prefixPattern)

  // If prefix not found, pattern cannot match
  if (prefixMatchIndex === -1) return false

  // Get the remaining string after the matched prefix
  const remainingString = s.substring(prefixMatchIndex + prefixPattern.length)
  // Check if suffix exists in the remaining string
  const suffixMatchIndex = remainingString.indexOf(suffixPattern)

  // Return true if suffix is found, false otherwise
  return suffixMatchIndex !== -1
}
