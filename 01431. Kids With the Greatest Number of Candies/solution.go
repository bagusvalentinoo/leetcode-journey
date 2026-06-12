/**
 * Problem: 1431. Kids With the Greatest Number of Candies
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func kidsWithCandies(candies []int, extraCandies int) []bool {
	// Initialize maximum candy count with the first kid's candies
	maxCandyCount := candies[0]

	// Find the maximum candy count among all kids
	for _, count := range candies {
		// If current candy count is greater than current max, update max
		if count > maxCandyCount {
			maxCandyCount = count
		}
	}

	// Slice to store results
	result := make([]bool, len(candies))

	// Check each kid: if adding extra candies reaches or exceeds the maximum, set true; otherwise false
	for i, currentCandies := range candies {
		result[i] = currentCandies+extraCandies >= maxCandyCount
	}

	// Return the slice of boolean results
	return result
}
