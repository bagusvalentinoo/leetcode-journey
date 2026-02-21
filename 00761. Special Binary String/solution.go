/**
 * Problem: 761. Special Binary String
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func makeLargestSpecial(s string) string {
	// Base case: strings of length 2 or less cannot be rearranged
	if len(s) <= 2 {
		return s
	}

	// Track balance of 1s and 0s
	balance := 0

	// Track start position of current substring
	start := 0

	// Store processed special substrings
	specials := make([]string, 0)

	// Iterate through the string
	for i := 0; i < len(s); i++ {
		// Increment balance for '1', decrement for '0'
		if s[i] == '1' {
			balance++
		} else {
			balance--
		}

		// When balance reaches zero, we found a valid special substring
		if balance == 0 {
			// Process inner substring recursively
			// Wrap with '1' at start and '0' at end
			inner := s[start+1 : i]
			specials = append(specials, "1"+makeLargestSpecial(inner)+"0")

			// Move start to next position
			start = i + 1
		}
	}

	// Sort in descending order
	sort.Sort(sort.Reverse(sort.StringSlice(specials)))

	// Concatenate and return
	return strings.Join(specials, "")
}
