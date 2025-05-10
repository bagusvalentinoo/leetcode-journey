/**
 * Problem: 22. Generate Parentheses
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func generateParenthesis(n int) []string {
	// Initialize an empty slice to store valid parentheses combinations
	var result []string

	// Use backtracking to generate all valid combinations, starting with empty string
	backtrack(&result, "", 0, 0, n)

	// Return all valid combinations
	return result
}

func backtrack(result *[]string, current string, open, close, max int) {
	// If we've used all available parentheses, add the complete string to result
	if len(current) == 2*max {
		*result = append(*result, current)
		return
	}
	
	// Add an opening parenthesis if we haven't used all available ones
	if open < max {
		backtrack(result, current + "(", open + 1, close, max)
	}
	// Add a closing parenthesis if it's valid (more open than close parentheses so far)
	if close < open {
		backtrack(result, current + ")", open, close + 1, max)
	}
}