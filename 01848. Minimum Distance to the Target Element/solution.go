/**
 * Problem: 1848. Minimum Distance to the Target Element
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func getMinDistance(nums []int, target int, start int) int {
	// Initialize minimum distance to maximum integer value
	minDistance := int(^uint(0) >> 1) // Max int

	// Iterate through the array
	for i := 0; i < len(nums); i++ {
		// Check if current element matches target
		if nums[i] == target {
			// Calculate absolute distance between current index and start
			distance := i - start

			// If distance is negative, convert to positive (absolute value)
			if distance < 0 {
				distance = -distance
			}

			// Update minDistance if current distance is smaller
			if distance < minDistance {
				minDistance = distance
			}
		}
	}

	// Return minimum distance
	return minDistance
}
