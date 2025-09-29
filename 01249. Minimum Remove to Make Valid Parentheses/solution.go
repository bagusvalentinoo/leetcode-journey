/**
 * Problem: 1249. Minimum Remove to Make Valid Parentheses
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minRemoveToMakeValid(s string) string {
	// Check if the input string is empty, return as is if true.
	if len(s) == 0 {
		return s
	}

	// Stores indices of characters to be removed for valid parentheses.
	indicesToRemove := []int{}

	// Convert input string to a byte slice for easier manipulation.
	charBytes := []byte(s)

	// Stack to keep track of unmatched right parentheses indices.
	unmatchedRightParenIndices := []int{}

	// Iterate backwards through the byte slice to find unmatched parentheses.
	for i := len(charBytes) - 1; i >= 0; i-- {
		// Get the current character as a rune.
		currentChar := rune(charBytes[i])

		// If current character is '(', check for matching ')'.
		if currentChar == '(' {
			// If there is an unmatched ')', match it and remove from stack.
			if len(unmatchedRightParenIndices) > 0 {
				unmatchedRightParenIndices = unmatchedRightParenIndices[:len(unmatchedRightParenIndices)-1]
			} else {
				// No unmatched ')', so this '(' is invalid and should be removed.
				indicesToRemove = append(indicesToRemove, i)
			}
		} else if currentChar == ')' {
			// If current character is ')', add its index to the stack.
			unmatchedRightParenIndices = append(unmatchedRightParenIndices, i)
		}
	}

	// Add all remaining unmatched ')' indices to the removal list.
	indicesToRemove = append(indicesToRemove, unmatchedRightParenIndices...)

	// Remove all characters at the indices marked for removal.
	for _, index := range indicesToRemove {
		// If index is at the start, remove the first character.
		if index == 0 {
			charBytes = charBytes[1:]
		} else if index == len(charBytes)-1 {
			// If index is at the end, remove the last character.
			charBytes = charBytes[:index]
		} else {
			// Otherwise, remove the character at the specified index.
			charBytes = append(charBytes[:index], charBytes[index+1:]...)
		}
	}

	// Convert the modified byte slice back to a string and return.
	return string(charBytes)
}
