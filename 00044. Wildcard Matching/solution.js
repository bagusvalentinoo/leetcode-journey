/**
 * Problem: 44. Wildcard Matching
 *
 * Difficulty: Hard
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

/**
 * Checks if string `s` matches pattern `p`
 *
 * @param {string} s - Input string
 * @param {string} p - Pattern with wildcards
 *
 * @returns {boolean} - True if `s` matches `p`, else false
 */
const isMatch = (s, p) => {
  // Initialize pointer for input string `s`
  let sIdx = 0,
    // Initialize pointer for pattern `p`
    pIdx = 0

  // Store the last position of '*' in pattern, -1 means no '*' found yet
  let starIdx = -1,
    // Store the position in `s` corresponding to the last '*' in `p`
    sTmpIdx = 0

  // Iterate through the input string
  while (sIdx < s.length) {
    // If current characters match or pattern has '?', move both pointers forward
    if (pIdx < p.length && (s[sIdx] === p[pIdx] || p[pIdx] === '?')) {
      sIdx++
      pIdx++
    }
    // If pattern has '*', record its position and the current position in `s`
    else if (pIdx < p.length && p[pIdx] === '*') {
      starIdx = pIdx++
      sTmpIdx = sIdx
    }
    // If previous '*' exists, backtrack: move pattern pointer after '*', and try to match more characters in `s`
    else if (starIdx !== -1) {
      pIdx = starIdx + 1
      sIdx = ++sTmpIdx
    }
    // If no match and no previous '*', return false
    else return false
  }

  // Skip remaining '*' in pattern
  while (pIdx < p.length && p[pIdx] === '*') pIdx++

  // If pattern is fully traversed, return true; otherwise, false
  return pIdx === p.length
}
