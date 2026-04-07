/**
 * Problem: 1328. Break a Palindrome
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func breakPalindrome(palindrome string) string {
	// Single character palindrome cannot be broken
	if len(palindrome) == 1 {
		return ""
	}

	// Convert string to slice for manipulation
	characters := []byte(palindrome)

	// Check first half of palindrome (only need to check up to middle)
	for i := 0; i <= len(characters)/2-1; i++ {
		// If character is not 'a', change it to 'a' for smallest result
		if characters[i] != 'a' {
			// Change character to 'a'
			characters[i] = 'a'

			// Return modified string
			return string(characters)
		}
	}

	// All characters in first half are 'a', change last character to 'b'
	characters[len(characters)-1] = 'b'

	// Return the modified string
	return string(characters)
}
