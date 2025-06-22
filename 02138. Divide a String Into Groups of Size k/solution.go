/**
 * Problem: 2138. Divide a String Into Groups of Size k
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func divideString(s string, k int, fill byte) []string {
	// Initialize slice to store the result groups
	groups := []string{}
	// Get the length of input string
	length := len(s)

	for i := 0; i < length; i += k {
		// Calculate the end index for current chunk
		endIndex := i + k

		// Handle case where remaining characters are less than k
		if endIndex > length {
			// Extract remaining characters
			chunk := s[i:]
			// Create padding with fill character
			padding := make([]byte, k-len(chunk))

			// Fill padding with the specified character
			for j := range padding {
				padding[j] = fill
			}

			// Append padded chunk to result
			chunk += string(padding)
			groups = append(groups, chunk)
		} else {
			// Handle normal case where we have exactly k characters
			groups = append(groups, s[i:endIndex])
		}
	}

	return groups
}
