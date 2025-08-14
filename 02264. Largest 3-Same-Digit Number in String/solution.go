/**
 * Problem: 2264. Largest 3-Same-Digit Number in String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func largestGoodInteger(num string) string {
	// Initialize variable to store the largest good integer found so far.
	best := ""

	// Iterate through the string, checking each substring of length 3.
	for i := 0; i+2 < len(num); i++ {
		// Check if the current three consecutive digits are the same.
		if num[i] == num[i+1] && num[i] == num[i+2] {
			// Extract the current 3-digit substring.
			cur := num[i : i+3]

			// Update 'best' if the current substring is greater than the previous best.
			if cur > best {
				best = cur
			}
		}
	}

	// Return the largest good integer found, or an empty string if none exists.
	return best
}
