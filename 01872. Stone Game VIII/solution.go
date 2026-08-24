/**
 * Problem: 1872. Stone Game VIII
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func stoneGameVIII(stones []int) int {
	// Get the number of stones
	stoneCount := len(stones)

	// Calculate prefix sums in-place
	for i := 1; i < stoneCount; i++ {
		stones[i] += stones[i-1]
	}

	// Initialize max score difference with taking all stones
	maxScoreDiff := stones[stoneCount-1]

	// Iterate backwards to find optimal score difference
	for i := stoneCount - 2; i >= 1; i-- {
		if stones[i]-maxScoreDiff > maxScoreDiff {
			maxScoreDiff = stones[i] - maxScoreDiff
		}
	}

	// Return the maximum score difference Alice can achieve
	return maxScoreDiff
}

