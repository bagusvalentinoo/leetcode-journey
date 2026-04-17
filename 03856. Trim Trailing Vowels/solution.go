/**
 * Problem: 3856. Trim Trailing Vowels
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func trimTrailingVowels(s string) string {
	// Create a map for O(1) vowel lookup
	vowels := map[byte]bool{
		'a': true, 'e': true, 'i': true, 'o': true, 'u': true,
	}

	// Convert string to byte slice for manipulation
	chars := []byte(s)

	// Continue while there are characters to check
	for len(chars) > 0 {
		// Get last character and convert to lowercase
		lastChar := bytes.ToLower(chars[len(chars)-1:])[0]

		// If last character is a vowel, remove it
		if vowels[lastChar] {
			chars = chars[:len(chars)-1]
		} else {
			// Stop when non-vowel is found
			break
		}
	}

	// Return the modified string
	return string(chars)
}
