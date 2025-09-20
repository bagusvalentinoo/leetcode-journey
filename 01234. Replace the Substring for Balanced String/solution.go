/**
 * Problem: 1234. Replace the Substring for Balanced String
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func balancedString(s string) int {
	n := len(s) // Get the length of the input string
	k := n / 4  // Each character should appear exactly n/4 times for a balanced string

	// Initialize counters for each character
	countQ, countW, countE, countR := 0, 0, 0, 0

	right := n - 1 // Initialize the right pointer to the end of the string

	// Move the right pointer leftwards to find the initial window
	for right >= 0 {
		switch s[right] {
		case 'Q':
			countQ++
		case 'W':
			countW++
		case 'E':
			countE++
		case 'R':
			countR++
		}

		// If any character exceeds the allowed count, stop shrinking the window
		if countQ > k {
			countQ--
			break
		}
		if countW > k {
			countW--
			break
		}
		if countE > k {
			countE--
			break
		}
		if countR > k {
			countR--
			break
		}

		right--
	}

	minLen := math.MaxInt // Initialize the minimum length to the maximum possible integer

	// Iterate with the left pointer to find the minimum window
	for left := range n {
		// If not at the start, increment the count for the character at s[left-1]
		if left > 0 {
			switch s[left-1] {
			case 'Q':
				countQ++
			case 'W':
				countW++
			case 'E':
				countE++
			case 'R':
				countR++
			}
		}

		// Move the right pointer to the right while the window is invalid
		for right+1 < n && (countQ > k || countW > k || countE > k || countR > k) {
			switch s[right+1] {
			case 'Q':
				countQ--
			case 'W':
				countW--
			case 'E':
				countE--
			case 'R':
				countR--
			}

			right++
		}

		// If the window is still invalid, return the current minimum length
		if countQ > k || countW > k || countE > k || countR > k {
			return minLen
		}

		// Update the minimum length if a smaller valid window is found
		minLen = min(minLen, right-left+1)
	}

	// Return the minimum length of the substring to replace
	return minLen
}
