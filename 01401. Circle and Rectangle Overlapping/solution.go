/**
 * Problem: 1401. Circle and Rectangle Overlapping
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkOverlap(radius int, xCenter int, yCenter int, x1 int, y1 int, x2 int, y2 int) bool {
	// Find the closest point on rectangle to circle center
	// Clamp circle center coordinates to rectangle boundaries
	closestRectX, closestRectY := max(x1, min(xCenter, x2)), max(y1, min(yCenter, y2))

	// Calculate distance from circle center to the closest rectangle point
	distanceToClosestPoint := math.Sqrt(
		math.Pow(float64(xCenter-closestRectX), 2) +
			math.Pow(float64(yCenter-closestRectY), 2),
	)

	// Overlap occurs if distance is less than or equal to radius
	return distanceToClosestPoint <= float64(radius)
}
