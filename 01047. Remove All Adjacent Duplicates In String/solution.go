/**
 * Problem: 1047. Remove All Adjacent Duplicates In String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func removeDuplicates(s string) string {
	// Initialize an empty stack to store runes (characters) from the input string.
	stack := []rune{}

	// Iterate over each character in the input string.
	for _, char := range s {
		// If the stack is not empty and the top element is the same as the current character,
		// remove the top element (pop) to eliminate adjacent duplicates.
		if len(stack) > 0 && stack[len(stack)-1] == char {
			stack = stack[:len(stack)-1]
		} else {
			// Otherwise, push the current character onto the stack.
			stack = append(stack, char)
		}
	}
	
	// Convert the stack of runes back to a string and return the result.
	return string(stack)
}
