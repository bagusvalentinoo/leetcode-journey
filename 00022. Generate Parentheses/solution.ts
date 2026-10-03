/**
 * Problem: 22. Generate Parentheses
 *
 * Difficulty: Medium
 *
 * Language: TypeScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

/**
 * Generate all combinations of well-formed parentheses
 *
 * @param n - Number of pairs of parentheses
 *
 * @returns All valid combinations
 */
const generateParenthesis = (n: number): string[] => {
  // Store all valid combinations
  const result: string[] = []

  // Build combinations by tracking open and close counts
  const backtrack = (current: string, open: number, close: number): void => {
    // Add complete string once all pairs are used
    if (current.length === 2 * n) {
      result.push(current)
      return
    }
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
