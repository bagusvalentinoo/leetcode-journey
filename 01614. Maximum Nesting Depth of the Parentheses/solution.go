/**
 * Problem: 1614. Maximum Nesting Depth of the Parentheses
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxDepth(s string) int {
	// Track current depth and deepest depth seen so far
	currentDepth, maxDepthValue := 0, 0

	// Scan each character in the string
	for _, character := range s {
		// Opening parenthesis deepens nesting and may set a new maximum
		if character == '(' {
			currentDepth++
			if currentDepth > maxDepthValue {
				maxDepthValue = currentDepth
			}
		} else if character == ')' {
			// Closing parenthesis reduces the current nesting level
			currentDepth--
		}
	}

	// Return the deepest nesting level encountered
	return maxDepthValue
}
