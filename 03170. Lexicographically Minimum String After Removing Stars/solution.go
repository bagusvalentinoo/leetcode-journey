/**
 * Problem: 3170. Lexicographically Minimum String After Removing Stars
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 16 ms (Beats 100%)
 */

func clearStars(s string) string {
	// Convert input string to byte slice for manipulation
	chars := []byte(s)
	strLen := len(s)
	// Track positions of each letter (a-z) in the string
	charPositions := [26][]int{}

	for i := 0; i < strLen; i++ {
		if chars[i] != '*' {
			// Store position of each non-star character
			charIndex := chars[i]-'a'
			charPositions[charIndex] = append(charPositions[charIndex], i)
			continue
		}

		var letterIndex int

		// Find the lexicographically smallest character with positions recorded
		for letterIndex = 0; letterIndex < 26; letterIndex++ {
			if len(charPositions[letterIndex]) > 0 { break }
		}

		// Get position of the most recently seen smallest character
		lastPos := charPositions[letterIndex][len(charPositions[letterIndex])-1]
		// Remove this position from tracking
		charPositions[letterIndex] = charPositions[letterIndex][:len(charPositions[letterIndex])-1]
		// Mark character as removed
		chars[lastPos] = '*'
	}

	// Build result string excluding removed characters
	result := make([]byte, 0, strLen)

	for i := 0; i < strLen; i++ {
		if chars[i] == '*' { continue }

		result = append(result, chars[i])
	}
	
	return string(result)
}