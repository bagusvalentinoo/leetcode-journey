/**
 * Problem: 22. Generate Parentheses
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func generateParenthesis(n int) []string {
  // Store all valid combinations
  result := make([]string, 0)

  // Build combinations by tracking open and close counts
  var backtrack func(current string, open, close int)
  backtrack = func(current string, open, close int) {
    // Add complete string once all pairs are used
    if len(current) == 2*n {
      result = append(result, current)
      return
    }
    // Add open parenthesis while pairs remain
    if open < n {
      backtrack(current+"(", open+1, close)
    }
    // Add close parenthesis only when it keeps the string valid
    if close < open {
      backtrack(current+")", open, close+1)
    }
  }

  // Start from the empty string
  backtrack("", 0, 0)

  // Return all valid combinations
  return result
}
