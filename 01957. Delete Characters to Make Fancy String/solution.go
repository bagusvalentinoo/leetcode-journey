/**
 * Problem: 1957. Delete Characters to Make Fancy String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 8 ms (Beats 100%)
 */

func makeFancyString(s string) string {
	// Initialize a slice of bytes to store the result string.
	result := []byte{}

	// Iterate through each character in the input string.
	for i := 0; i < len(s); i++ {
		// Get the current length of the result slice.
		n := len(result)
		
		// If there are less than 2 characters in result, or the last two characters are not equal to the current character,
		// append the current character to the result. This prevents three consecutive identical characters.
		if n < 2 || !(result[n-1] == s[i] && result[n-2] == s[i]) {
			result = append(result, s[i])
		}
	}

	// Convert the result slice of bytes back to a string and return it.
	return string(result)
}
