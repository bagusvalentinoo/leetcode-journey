/**
 * Problem: 986. Interval List Intersections
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func intervalIntersection(firstList [][]int, secondList [][]int) [][]int {
	// Initialize pointers for both lists
	firstIdx, secondIdx := 0, 0
	// Store the intersection intervals
	intersections := [][]int{}

	// Process both lists until we reach the end of either one
	for firstIdx < len(firstList) && secondIdx < len(secondList) {
		// Extract interval boundaries from both lists
		firstStart, firstEnd := firstList[firstIdx][0], firstList[firstIdx][1]
		secondStart, secondEnd := secondList[secondIdx][0], secondList[secondIdx][1]
		
		// Find potential intersection points
		maxStart := max(firstStart, secondStart)
		minEnd := min(firstEnd, secondEnd)

		// If valid intersection exists, add to result
		if maxStart <= minEnd {
			intersections = append(intersections, []int{maxStart, minEnd})
		}

		// Move pointer of the interval that ends earlier
		if firstEnd < secondEnd {
			firstIdx++
		} else {
			secondIdx++
		}
	}

	return intersections
}