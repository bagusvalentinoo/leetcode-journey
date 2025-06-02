/**
 * Problem: 1007. Minimum Domino Rotations For Equal Row
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minDominoRotations(tops []int, bottoms []int) int {
	// Count occurrences of each value in tops
	topCounts := make([]int, 7)
	// Count occurrences of each value in bottoms
	bottomCounts := make([]int, 7)
	// Count positions where top and bottom have the same value
	sameCounts := make([]int, 7)

	// Count occurrences of each value in both arrays
	for i := range tops {
		topCounts[tops[i]]++
		bottomCounts[bottoms[i]]++

		// Track when same value appears in both top and bottom
		if tops[i] == bottoms[i] {
			sameCounts[tops[i]]++
		}
	}

	// Check each possible value (1-6) that could appear in all positions
	for i := 1; i <= 6; i++ {
		// If value i can be made to appear in every position after rotations
		if topCounts[i]+bottomCounts[i]-sameCounts[i] == len(tops) {
			// Calculate minimum rotations needed (choose smaller count)
			if topCounts[i] < bottomCounts[i] {
				return topCounts[i] - sameCounts[i]
			}

			return bottomCounts[i] - sameCounts[i]
		}
	}
	
	// Return -1 if no solution exists
	return -1
}