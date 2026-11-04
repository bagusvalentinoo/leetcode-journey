/**
 * Problem: 2309. Greatest English Letter in Upper and Lower Case
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func greatestLetter(s string) string {
	// Step 1: Initialize lowercase and uppercase bitmasks.
	lower, upper := 0, 0

	// Step 2: Record the occurrence of each character.
	for i := 0; i < len(s); i++ {
		ch := s[i]

		if ch >= 'a' && ch <= 'z' {
			lower |= 1 << (ch - 'a')
		} else {
			upper |= 1 << (ch - 'A')
		}
	}

	// Step 3: Find letters appearing in both cases.
	common := lower & upper

	// Step 4: Search for the greatest matching letter.
	for i := 25; i >= 0; i-- {
		if common&(1<<i) != 0 {
			return string(rune('A' + i))
		}
	}

	// Step 5: Return an empty string if no match exists.
	return ""
}
