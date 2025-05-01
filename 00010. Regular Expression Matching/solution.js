/**
 * Problem: 10. Regular Expression Matching
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Check if given string matches the given pattern
 *
 * @param {string} s - The string to be matched
 * @param {string} p - The pattern to match against
 *
 * @returns {boolean} - True if the string matches the pattern, false otherwise
 */
const isMatch = (s, p) => {
  // Return false for empty strings or patterns
  if (s.length <= 0 || p.length <= 0) return false

  let start = 0

  // Optimization: Find where first mismatch occurs to skip identical prefixes
  for (let i = 0; i < s.length && i < p.length; i++) {
    if (s[i] !== p[i]) {
      start = Math.max(0, i - 1)
      break
    }
  }

  // Initialize memoization cache array
  const c = new Array(s.length + 1)

  // Fill the cache with empty arrays for each position
  for (let i = 0; i < c.length; i++) c[i] = new Array(p.length + 1)

  // Start recursive matching from the first potential mismatch position
  return recur(s, p, start, start, c)
}

/**
 * Recursive function to check if the string matches the pattern
 *
 * @param {string} s - The string to be matched
 * @param {string} p - The pattern to match against
 * @param {number} si - The current index in the string
 * @param {number} pi - The current index in the pattern
 * @param {Array} c - The cache for memoization
 *
 * @returns {boolean} - True if the string matches the pattern, false otherwise
 */
const recur = (s, p, si, pi, c) => {
  // Check if we've already computed this subproblem
  const known = c[si][pi]

  if (known !== undefined) return known

  // Base case: reached end of string or pattern
  if (si >= s.length || pi >= p.length) {
    // String matches if we've consumed all characters or remaining pattern can match empty string
    const res = si >= s.length && (pi >= p.length || isAllZeroWidth(p, pi))
    c[si][pi] = res

    return res
  }

  // Get current pattern character and check if it matches current string character
  const pcurr = p[pi]
  const cmatch = s[si] === pcurr || pcurr === '.'

  // Handle '*' pattern (zero or more occurrences)
  if (p[pi + 1] === '*') {
    // Either skip the pattern with '*' (zero occurrences) or use current match and repeat
    const res =
      recur(s, p, si, pi + 2, c) || (cmatch && recur(s, p, si + 1, pi, c))
    c[si][pi] = res

    return res
  }

  // Regular case: match current character and continue with next positions
  const res = cmatch && recur(s, p, si + 1, pi + 1, c)
  c[si][pi] = res

  return res
}

/**
 * Check if remaining pattern characters are all zero-width (followed by '*')
 *
 * @param {string} p - Pattern string
 * @param {number} pi - Starting index in pattern
 *
 * @returns {boolean} - True if all remaining characters have '*' after them
 */
const isAllZeroWidth = (p, pi) => {
  // Check if all remaining characters can be skipped by using '*' pattern
  // Returns true if each character is followed by '*', false otherwise
  for (let i = pi; i < p.length; i += 2) if (p[i + 1] !== '*') return false

  return true
}
