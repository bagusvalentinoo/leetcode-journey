/**
 * Problem: 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func modifyString(s string) string {
	// Convert string to mutable byte array
	chars := []byte(s)

	// Iterate through each position
	for i := 0; i < len(chars); i++ {
		// Process only '?' placeholders
		if chars[i] != '?' {
			continue
		}

		// Try candidate letters a, b, c to find valid replacement
		for c := byte('a'); c <= 'c'; c++ {
			// Check left neighbor is different (already replaced if it was '?')
			leftOk := i == 0 || chars[i-1] != c

			// Check right neighbor is different (skip if right is '?' placeholder)
			rightOk := i == len(chars)-1 || chars[i+1] != c

			// Pick first candidate satisfying both neighbors
			if leftOk && rightOk {
				// Assign valid replacement
				chars[i] = c
				break
			}
		}
	}

	// Build string from byte array
	return string(chars)
}
