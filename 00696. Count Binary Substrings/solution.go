/**
 * Problem: 696. Count Binary Substrings
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countBinarySubstrings(s string) int {
	// Find first occurrence where character changes
	current, count := s[0], 0
	start, end := 0, -1

	// Locate the first occurrence where character changes
	for i := 0; i < len(s); i++ {
		// Get current character
		v := s[i]

		// If character is same as first character, continue
		if v == s[0] {
			continue
		}

		// Set end to current index
		end = i
		// Set current character
		current = s[i]

		// Break the loop
		break
	}

	// If no change found, return 0
	if end == -1 {
		return 0
	}

	// Iterate through string starting from second character
	for i := end; i < len(s); i++ {
		// Get current character
		v := s[i]

		// If character changes
		if v != current {
			// Set start to end
			start = end
			// Set end to current index
			end = i
			// Set current character
			current = v
			// Increment count
			count++

			// Continue to next iteration
			continue
		}

		// If previous group count is at least current group count
		if end-start > i-end {
			// Increment count
			count++
		}
	}

	// Return total count
	return count
}
