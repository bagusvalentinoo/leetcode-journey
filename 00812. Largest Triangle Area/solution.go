/**
 * Problem: 812. Largest Triangle Area
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func largestTriangleArea(points [][]int) float64 {
	// Initialize maxArea to store the largest triangle area found
	maxArea := 0.0

	// Get the total number of points
	n := len(points)

	// Iterate over all unique combinations of three points
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			for k := j + 1; k < n; k++ {

				// Extract coordinates for the first point
				x1, y1 := points[i][0], points[i][1]

				// Extract coordinates for the second point
				x2, y2 := points[j][0], points[j][1]

				// Extract coordinates for the third point
				x3, y3 := points[k][0], points[k][1]

				// Calculate the area of the triangle using the shoelace formula
				area := 0.5 * math.Abs(float64(x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2)))

				// Update maxArea if the current area is larger
				if area > maxArea {
					maxArea = area
				}
			}
		}
	}

	// Return the largest triangle area found
	return maxArea
}
