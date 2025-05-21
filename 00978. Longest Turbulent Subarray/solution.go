/**
 * Problem: 978. Longest Turbulent Subarray
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxTurbulenceSize(arr []int) int {
	// Handle edge case of arrays with less than 2 elements
	if len(arr) < 2 {
		return 1
	}

	// Initialize variables for left boundary, maximum length, and previous difference
	start, maxLength, prevDiff := 0, 0, 0

	// Iterate through the array starting from the second element
	for i, num := range arr[1:] {
		// Calculate current difference between consecutive elements
		currDiff := arr[i] - num

		// Reset start position if elements are equal (no turbulence)
		if currDiff == 0 {
			start = i + 1
		} else if prevDiff == 0 || (prevDiff > 0 && currDiff > 0) || (prevDiff < 0 && currDiff < 0) {
			// Reset start if pattern breaks: same signs or first comparison
			start = i
		}

		// Update previous difference for next iteration
		prevDiff = currDiff
		// Update max length found so far
		maxLength = max(maxLength, i+2-start)
	}

	return maxLength
}