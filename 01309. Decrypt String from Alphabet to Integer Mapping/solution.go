/**
 * Problem: 1309. Decrypt String from Alphabet to Integer Mapping
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func freqAlphabets(s string) string {
	// Slice to store decoded characters
	result := make([]byte, 0)

	// Initialize pointers
	i := 0
	n := len(s)

	// Process the string from left to right
	for i < n {
		// Check if current position starts a two-digit number with '#'
		if i+2 < n && s[i+2] == '#' {
			// Extract two-digit number
			num, _ := strconv.Atoi(s[i : i+2])

			// Convert to corresponding letter (a=1, b=2, ..., z=26)
			result = append(result, byte('a'+num-1))
			// Skip over the two digits and the '#'
			i += 3
		} else {
			// Single digit number
			num := int(s[i] - '0')

			// Convert to corresponding letter
			result = append(result, byte('a'+num-1))
			// Move to next character
			i++
		}
	}

	// Return the result string
	return string(result)
}
