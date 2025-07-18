/**
 * Problem: 1037. Valid Boomerang
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isBoomerang(points [][]int) bool {
	// Extract x and y coordinates from the first point
	x1, y1 := points[0][0], points[0][1]
	// Extract x and y coordinates from the second point
	x2, y2 := points[1][0], points[1][1]
	// Extract x and y coordinates from the third point
	x3, y3 := points[2][0], points[2][1]

	// Check if three points are collinear using cross product
	// If (x2-x1)*(y3-y1) != (y2-y1)*(x3-x1), points are not collinear
	// This means they form a valid boomerang (triangle)
	return (x2 - x1) * (y3 - y1) != (y2 - y1) * (x3 - x1)
}
