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
	// Track current nesting depth
	depth := 0

	// StringBuilder to efficiently build result string
	var result strings.Builder

	// Iterate through each character in the string
	for i := 0; i < len(s); i++ {
		// If character is an opening parenthesis
		if s[i] == '(' {
			// Increment depth for nested parentheses
			depth++

			// Find the matching closing parenthesis for this primitive string
			for j := i + 1; j < len(s); j++ {
				// If character is an opening parenthesis, increment depth
				if s[j] == '(' {
					depth++
					continue
				}

				// If character is a closing parenthesis
				if s[j] == ')' {
					// Decrement depth
					depth--

					// If depth reaches 0, we found the matching closing parenthesis
					if depth == 0 {
						// Write the inner substring (excluding outermost parentheses)
						result.WriteString(s[i+1 : j])

						// Move pointer to the matching closing parenthesis
						i = j

						// Exit inner loop
						break
					}
				}
			}
		}
	}

	// Return the resulting string with outermost parentheses removed
	return result.String()
}
