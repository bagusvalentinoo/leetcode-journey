/**
 * Problem: 3880. Minimum Absolute Difference Between Two Values
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minAbsoluteDifference(nums []int) int {
	// Initialize minimum difference to maximum integer value
	minDiff := int(^uint(0) >> 1) // Max int

	// Track last non-zero index
	lastIndex := -1

	// Iterate through the array
	for i := 0; i < len(nums); i++ {
		// Skip zero values
		if nums[i] != 0 {
			// Check if we have a previous non-zero and values are different
			if lastIndex != -1 && nums[lastIndex] != nums[i] {
				// Calculate distance between current and last non-zero index
				diff := i - lastIndex

				// Update minDiff if current distance is smaller
				if diff < minDiff {
					minDiff = diff
				}
			}

			// Update last non-zero index to current position
			lastIndex = i
		}
	}

	// If no valid difference found (minDiff still at max value), return -1
	if minDiff == int(^uint(0)>>1) {
		return -1
	}

	// Return the minimum absolute difference found
	return minDiff
}
