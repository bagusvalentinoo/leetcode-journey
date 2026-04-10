/**
 * Problem: 3740. Minimum Distance Between Three Equal Elements I
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumDistance(nums []int) int {
	// Get length of input array
	arrayLength := len(nums)

	// If array has less than 2 elements, no distance can be found
	if arrayLength < 2 {
		return -1
	}

	// Array to store previous positions (packed as [previous, current])
	lastPositions := make([]int, arrayLength)

	// Initialize result with maximum possible value
	minDistance := 300

	// Iterate through each element in the array
	for i := 0; i < arrayLength; i++ {
		// Convert 1-indexed value to 0-indexed for array access
		valueIndex := nums[i] - 1

		// Current position (1-indexed)
		currentPos := i + 1

		// Retrieve packed data: low 8 bits = previous position
		packedData := lastPositions[valueIndex]
		previousPos := packedData & 255
		_currentPos := packedData >> 8 // Not used

		// Store current position in high bits, keep previous in low bits
		lastPositions[valueIndex] = _currentPos | (currentPos << 8)

		// Check if we have a previous occurrence of the same value
		if previousPos != 0 {
			// Calculate distance: (current position - previous position) * 2
			dist := (currentPos - previousPos) << 1

			// Update minimum distance if current distance is smaller
			if dist < minDistance {
				minDistance = dist
			}
		}
	}

	// If no pair of equal numbers was found, return -1
	if minDistance == 300 {
		return -1
	}

	// Otherwise, return the minimum distance found
	return minDistance
}
