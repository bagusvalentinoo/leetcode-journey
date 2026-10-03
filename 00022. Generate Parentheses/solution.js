/**
 * Problem: 22. Generate Parentheses
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Generate all combinations of well-formed parentheses
 *
 * @param {number} n - Number of pairs of parentheses
 *
 * @returns {string[]} All valid combinations
 */
const generateParenthesis = (n) => {
  // Store all valid combinations
  const result = []

  // Build combinations by tracking open and close counts
  const backtrack = (current, open, close) => {
    // Add complete string once all pairs are used
    if (current.length === 2 * n) return result.push(current)
    // Add open parenthesis while pairs remain
    if (open < n) backtrack(current + '(', open + 1, close)
    // Add close parenthesis only when it keeps the string valid
    if (close < open) backtrack(current + ')', open, close + 1)
  }

  // Start from the empty string
  backtrack('', 0, 0)

  // Return all valid combinations
  return result
}
