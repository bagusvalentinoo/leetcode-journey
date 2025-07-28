/**
 * Problem: 1081. Smallest Subsequence of Distinct Characters
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func smallestSubsequence(s string) string {
	stack := []byte{}
	seen := make(map[byte]bool)
	lastOccurrence := make(map[byte]int)

	// Record the last occurrence of each character
	for i := 0; i < len(s); i++ {
		lastOccurrence[s[i]] = i
	}

	for i := 0; i < len(s); i++ {
		if seen[s[i]] {
			continue // Skip if character is already in the stack
		}

		// Maintain the stack in increasing order
		for len(stack) > 0 && stack[len(stack)-1] > s[i] && lastOccurrence[stack[len(stack)-1]] > i {
			seen[stack[len(stack)-1]] = false // Mark as not seen
			stack = stack[:len(stack)-1]      // Pop from stack
		}

		stack = append(stack, s[i]) // Add current character to the stack
		seen[s[i]] = true            // Mark as seen
	}

	return string(stack) // Convert stack to string and return
}
