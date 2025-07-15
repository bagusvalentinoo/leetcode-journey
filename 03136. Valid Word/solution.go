/**
 * Problem: 3136. Valid Word
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isValidWord(word string) bool {
	// Check if word length is at least 3 characters (minimum requirement)
	if len(word) < 3 { return false }

	// Define vowels map for efficient vowel lookup (both cases handled in loop)
	vowels := map[rune]bool {
		'a': true,
		'e': true,
		'i': true,
		'o': true,
		'u': true,
	}

	// hasVowel tracks if at least one vowel is found
	// hasConsonant tracks if at least one consonant is found
	var hasVowel, hasConsonant bool

	// Iterate through each character in the word
	for _, char := range word {
		// Check if character is a letter (uppercase or lowercase)
		if 'A' <= char && char <= 'Z' || 'a' <= char && char <= 'z' {
			// Check if current character is a vowel (handle both cases with ASCII conversion)
			if vowels[char] || vowels[char-32] || vowels[char + 32] {
				hasVowel = true
			} else {
				// If it's a letter but not a vowel, it's a consonant
				hasConsonant = true
			}
		} else if !('0' <= char && char <= '9') {
			// If character is not a letter and not a digit, word is invalid
			return false
		}
	}
	
	// Word is valid only if it contains at least one vowel AND one consonant
	return hasVowel && hasConsonant
}
