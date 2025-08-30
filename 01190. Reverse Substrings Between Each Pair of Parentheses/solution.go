/**
 * Problem: 1190. Reverse Substrings Between Each Pair of Parentheses
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func reverseParentheses(s string) string {
	// Initialize a stack to keep track of the indices of '(' characters
	stack := []int{}
	// Split the input string into a slice of single-character strings for easy manipulation
	tokens := strings.Split(s, "")

	// Define a helper function to reverse a slice of strings between start and end indices
	reverse := func(chars []string, startIdx, endIdx int) {
		for startIdx < endIdx {
			chars[startIdx], chars[endIdx] = chars[endIdx], chars[startIdx]
			startIdx++
			endIdx--
		}
	}

	// Iterate over each character in the input string
	for i := 0; i < len(s); i++ {
		// If the current character is '(', push its index onto the stack
		if s[i] == byte('(') {
			stack = append(stack, i)
		// If the current character is ')', pop the last '(' index and reverse the substring between them
		} else if s[i] == byte(')') {
			openIdx := stack[len(stack)-1]
			stack = stack[:len(stack)-1]

			reverse(tokens, openIdx+1, i-1)
		}
	}

	// Join the tokens back into a string and remove all parentheses
	return strings.ReplaceAll(strings.ReplaceAll(strings.Join(tokens, ""), "(", ""), ")", "")
}
