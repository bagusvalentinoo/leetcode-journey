/**
 * Problem: 20. Valid Parentheses
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isValid(s string) bool {
	// Use a stack to track opening brackets
	stack := make([]rune, 0)
	
	// Map closing brackets to their corresponding opening brackets
	bracketMap := map[rune]rune{
		')': '(',
		']': '[',
		'}': '{',
	}

	// Process each character in the string
	for _, char := range s {
		switch char {
			case '(', '[', '{':
				// For opening brackets, push to stack
				stack = append(stack, char)
			case ')', ']', '}':
				// For closing brackets, check if matching opening bracket is at top of stack
				if len(stack) == 0 || stack[len(stack)-1] != bracketMap[char] {
					return false
				}
				// Remove the matched opening bracket from stack
				stack = stack[:len(stack)-1]
		}
	}

	// Valid if all brackets are matched (stack empty)
	return len(stack) == 0
}