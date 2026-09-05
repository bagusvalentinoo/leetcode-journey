/**
 * Problem: 1592. Rearrange Spaces Between Words
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func reorderSpaces(text string) string {
	// Count total spaces in text
	totalSpaces := 0

	// Count each space character
	for _, ch := range text {
		if ch == ' ' {
			totalSpaces++
		}
	}

	// Split on spaces and drop empty entries to get words
	words := []string{}
	cur := []rune{}

	// Accumulate letters into words, splitting on spaces
	for _, ch := range text {
		// Accumulate non-space characters into current word
		if ch != ' ' {
			cur = append(cur, ch)
		} else if len(cur) > 0 {
			// Push completed word and reset on space boundary
			words = append(words, string(cur))
			cur = []rune{}
		}
	}

	// Push trailing word if text does not end with space
	if len(cur) > 0 {
		words = append(words, string(cur))
	}

	// Handle single word: all spaces go to the end
	if len(words) == 1 {
		// Build trailing spaces manually
		trailing := make([]byte, totalSpaces)
		for i := range trailing {
			trailing[i] = ' '
		}
		return words[0] + string(trailing)
	}

	// Compute number of gaps between adjacent words
	gaps := len(words) - 1

	// Compute even spaces per gap
	perGap := totalSpaces / gaps

	// Compute leftover spaces for the end
	trailing := totalSpaces % gaps

	// Build gap string of even spaces
	gap := make([]byte, perGap)
	for i := range gap {
		gap[i] = ' '
	}

	// Join words with even gaps
	result := ""
	for i, w := range words {
		// Append next word
		result += w

		// Append even gap except after last word
		if i < len(words)-1 {
			result += string(gap)
		}
	}

	// Append leftover trailing spaces
	for i := 0; i < trailing; i++ {
		result += " "
	}

	// Return string with evenly redistributed spaces
	return result
}
