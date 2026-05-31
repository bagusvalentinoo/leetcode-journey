/**
 * Problem: 1370. Increasing Decreasing String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sortString(s string) string {
	// Frequency array for 26 lowercase letters (a-z)
	frequency := make([]int, 26)

	// Count frequency of each character in the input string
	for i := 0; i < len(s); i++ {
		frequency[s[i]-'a']++
	}

	// String builder to build the result
	result := make([]byte, 0)

	// Continue until all characters have been used
	for len(result) < len(s) {
		// Forward pass: pick smallest available character (increasing order)
		for i := 0; i < 26; i++ {
			// If this character still has remaining count
			if frequency[i] > 0 {
				// Append character to result
				result = append(result, byte(i+'a'))
				// Decrease its frequency by 1
				frequency[i]--
			}
		}

		// Backward pass: pick largest available character (decreasing order)
		for i := 25; i >= 0; i-- {
			// If this character still has remaining count
			if frequency[i] > 0 {
				// Append character to result
				result = append(result, byte(i+'a'))
				// Decrease its frequency by 1
				frequency[i]--
			}
		}
	}

	// Return the final sorted string
	return string(result)
}
