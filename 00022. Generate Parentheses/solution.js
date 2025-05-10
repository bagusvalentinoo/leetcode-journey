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
 * Generate all valid combinations of n pairs of parentheses
 *
 * @param {number} n - Number of pairs
 *
 * @returns {string[]} - Array of valid parentheses strings
 */
const generateParenthesis = (n) => {
  // Store all valid combinations
  const result = []

  // Recursive function to build combinations
  const backtrack = (current, open, close) => {
    // Add to result when we have a complete valid string
    if (current.length === 2 * n) return result.push(current)
    // Add opening parenthesis if we haven't used all n
    if (open < n) backtrack(current + '(', open + 1, close)
    // Add closing parenthesis if it makes a valid expression
    if (close < open) backtrack(current + ')', open, close + 1)
  }

  // Start the recursion with empty string
  backtrack('', 0, 0)

  return result
}
