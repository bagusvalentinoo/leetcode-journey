/**
 * Problem: 1111. Maximum Nesting Depth of Two Valid Parentheses Strings
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

func maxDepthAfterSplit(seq string) []int {
	// Initialize a slice to store the result, with the same length as the input string.
	result := make([]int, len(seq))
	// Initialize a variable to keep track of the current nesting depth.
	depth := 0

	// Iterate over each character in the input string along with its index.
	for i, ch := range seq {
		if ch == '(' {
			// Assign the current depth modulo 2 to the result at index i.
			// This alternates assignment between 0 and 1 for each level of nesting.
			result[i] = depth % 2
			// Increase the depth for the next character.
			depth++
		} else {
			// Decrease the depth as we encounter a closing parenthesis.
			depth--
			// Assign the current depth modulo 2 to the result at index i.
			result[i] = depth % 2
		}
	}

	// Return the result slice containing the split assignment.
	return result
}
