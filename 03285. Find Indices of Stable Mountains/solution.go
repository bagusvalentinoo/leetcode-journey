/**
 * Problem: 3285. Find Indices of Stable Mountains
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func stableMountains(height []int, threshold int) []int {
	// Slice to store indices meeting the condition
	validIndices := make([]int, 0)

	// Iterate through heights starting from index 1 (need previous element)
	for currentIndex := 1; currentIndex < len(height); currentIndex++ {
		// If previous mountain height exceeds threshold, add current index
		if height[currentIndex-1] > threshold {
			validIndices = append(validIndices, currentIndex)
		}
	}

	// Return the slice of valid indices
	return validIndices
}
