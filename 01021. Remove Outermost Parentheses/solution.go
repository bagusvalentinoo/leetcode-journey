/**
 * Problem: 1021. Remove Outermost Parentheses
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func removeOuterParentheses(s string) string {
	// Track nesting depth of parentheses
	depth := 0
	// Store characters that are not outermost parentheses
	var result []rune

	// Iterate through string, only keeping parentheses that aren't at depth 0 (outermost)
	for _, char := range s {
		if char == '(' {
			if depth > 0 {
				result = append(result, char)
			}
			depth++
		} else {
			depth--
			if depth > 0 {
				result = append(result, char)
			}
		}
	}

	return string(result)
}
