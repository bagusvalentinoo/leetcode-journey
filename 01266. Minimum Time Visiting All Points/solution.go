/**
 * Problem: 1266. Minimum Time Visiting All Points
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minTimeToVisitAllPoints(points [][]int) int {
	// totalTime stores the accumulated minimum time to visit all points.
	totalTime := 0
	// previousPoint holds the coordinates of the last visited point, initialized to the first point.
	previousPoint := points[0]

	// Iterate through each point starting from the second one.
	for _, currentPoint := range points[1:] {
		// Calculate the time to move from previousPoint to currentPoint.
		// The time is the maximum of the absolute differences in x and y coordinates.
		totalTime += max(abs(currentPoint[0]-previousPoint[0]), abs(currentPoint[1]-previousPoint[1]))
		// Update previousPoint to the currentPoint for the next iteration.
		previousPoint = currentPoint
	}

	// Return the total minimum time required to visit all points.
	return totalTime
}

// abs returns the absolute value of an integer.
// It takes an integer as input and returns its non-negative value.
func abs(value int) int {
	if value < 0 {
		return -value
	}

	return value
}
