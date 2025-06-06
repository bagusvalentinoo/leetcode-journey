/**
 * Problem: 2434. Using a Robot to Print the Lexicographically Smallest String
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 7 ms (Beats 100%)
 */

func robotWithString(s string) string {
	// Length of the input string
	length := len(s)
	// Track the smallest character in each suffix
	minSuffix := make([]byte, length)

	minSuffix[length-1] = s[length-1]

	// Precompute the smallest character for each suffix
	for i := length - 2; i >= 0; i-- {
		if s[i] < minSuffix[i+1] {
			minSuffix[i] = s[i]
		} else {
			minSuffix[i] = minSuffix[i+1]
		}
	}
	
	// Stack to simulate the robot's memory
	var stack []byte
	// Builder to construct the result string efficiently
	var result strings.Builder

	i := 0

	// Process characters until we've gone through all input and emptied the stack
	for i < length || len(stack) > 0 {
		// Pop from stack if it has the lexicographically smallest character
		if len(stack) > 0 && (i == length || stack[len(stack)-1] <= minSuffix[i]) {
			result.WriteByte(stack[len(stack)-1])
			stack = stack[:len(stack)-1]
		} else {
			// Otherwise, push current character to stack
			stack = append(stack, s[i])
			i++
		}
	}
	
	return result.String()
}