/**
 * Problem: 2828. Check if a String Is an Acronym of Words
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isAcronym(words []string, s string) bool {
	// If number of words doesn't match string length, it can't be an acronym
	if len(words) != len(s) {
		return false
	}

	// Compare each character of s with first letter of corresponding word
	for i := 0; i < len(words); i++ {
		// If characters don't match, return false immediately
		if words[i][0] != s[i] {
			return false
		}
	}

	// All characters matched, valid acronym
	return true
}
