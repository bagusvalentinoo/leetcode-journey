/**
 * Problem: 744. Find Smallest Letter Greater Than Target
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

func nextGreatestLetter(letters []byte, target byte) byte {
	// Initialize binary search bounds
	left, right := 0, len(letters)

	// Perform binary search to find first character greater than target
	for left < right {
		mid := left + (right-left)/2

		// Narrow search range based on comparison
		if letters[mid] > target {
			right = mid
		} else {
			left = mid + 1
		}
	}

	// Use modulo to wrap around to first character if no greater character found
	return letters[left%len(letters)]
}
