/**
 * Problem: 1888. Minimum Number of Flips to Make the Binary String Alternating
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minFlips(s string) int {
	// Count flips needed when starting with '0' at position 0
	flipsForPattern0 := 0

	// Calculate flips needed for pattern '010101...'
	for i := 0; i < len(s); i++ {
		if i%2 == 1 {
			// Odd positions should be '1'
			if s[i] == '0' {
				flipsForPattern0++
			}
		} else {
			// Even positions should be '0'
			if s[i] == '1' {
				flipsForPattern0++
			}
		}
	}

	flipsForPattern1 := len(s) - flipsForPattern0
	minFlips := flipsForPattern0

	if flipsForPattern1 < minFlips {
		minFlips = flipsForPattern1
	}

	isEvenLength := len(s)%2 == 0

	// Slide window by removing first character and treating as new start
	for i := 1; i < len(s); i++ {
		// Remove effect of character at i-1 from counts
		if s[i-1] == '1' {
			flipsForPattern0--
		} else {
			flipsForPattern1--
		}

		// Swap patterns (rotation effect)
		flipsForPattern0, flipsForPattern1 = flipsForPattern1, flipsForPattern0

		// Add back character at i-1 with appropriate pattern
		if isEvenLength {
			// If length is even, first character of new window is at even position
			if s[i-1] == '1' {
				flipsForPattern1++
			} else {
				flipsForPattern0++
			}
		} else {
			// If length is odd, first character of new window is at odd position
			if s[i-1] == '1' {
				flipsForPattern0++
			} else {
				flipsForPattern1++
			}
		}

		// Update minimum flips
		if flipsForPattern0 < minFlips {
			minFlips = flipsForPattern0
		}
		if flipsForPattern1 < minFlips {
			minFlips = flipsForPattern1
		}
	}

	// If the length is even, the first character of the new window
	// will be at an even position
	return minFlips
}
