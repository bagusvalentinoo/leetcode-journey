/**
 * Problem: 1014. Best Sightseeing Pair
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxScoreSightseeingPair(values []int) int {
	// Initialize max score to track highest score found
	maxScore := 0
	// Track the max value of (values[i] + i) seen so far
	bestPreviousSpot := values[0]

	for currentIndex := 1; currentIndex < len(values); currentIndex++ {
		// Calculate score between current spot and best previous spot
		maxScore = max(maxScore, values[currentIndex]-currentIndex+bestPreviousSpot)
		// Update best previous spot if current spot has higher value considering its position
		bestPreviousSpot = max(bestPreviousSpot, values[currentIndex]+currentIndex)
	}

	return maxScore
}

func max(a, b int) int {
	if a > b {
		return a
	}
	
	return b
}