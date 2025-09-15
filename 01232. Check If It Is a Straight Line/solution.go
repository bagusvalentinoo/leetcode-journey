/**
 * Problem: 1232. Check If It Is a Straight Line
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkStraightLine(coordinates [][]int) bool {
	// If there are 2 or fewer points, they always form a straight line
	if len(coordinates) <= 2 {
		return true
	}
	
	// Extract the first two points to determine the line's direction
	x0, y0 := coordinates[0][0], coordinates[0][1] // First point (x0, y0)
	x1, y1 := coordinates[1][0], coordinates[1][1] // Second point (x1, y1)

	// Calculate the difference in x and y between the first two points
	deltaX := x1 - x0
	deltaY := y1 - y0

	// Iterate over the remaining points to check if they are collinear
	for _, point := range coordinates[2:] {
		x, y := point[0], point[1] // Current point (x, y)

		// Use cross multiplication to avoid division and check collinearity
		if deltaY*(x-x0) != deltaX*(y-y0) {
			return false // If not collinear, return false
		}
	}

	// All points are collinear, return true
	return true
}
