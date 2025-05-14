/**
 * Problem: 963. Minimum Area Rectangle II
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minAreaFreeRect(points [][]int) float64 {
	// Find minimum area rectangle with perpendicular sides among given points
	minArea := math.Inf(1)
	// Store all points in a map for O(1) lookup
	pointSet := make(map[string]bool)

	// Add all points to the set
	for _, p := range points {
		key := pointToKey(p[0], p[1])
		pointSet[key] = true
	}

	n := len(points)

	// Try all combinations of 3 points (potential corners of a rectangle)
	for i := 0; i < n; i++ {
		ax, ay := points[i][0], points[i][1]

		for j := i + 1; j < n; j++ {
			bx, by := points[j][0], points[j][1]

			for m := j + 1; m < n; m++ {
				cx, cy := points[m][0], points[m][1]

				// Calculate vectors from point A to B and A to C
				abx := bx - ax
				aby := by - ay
				acx := cx - ax
				acy := cy - ay

				// Skip if vectors are not perpendicular (dot product must be 0)
				if abx*acx+aby*acy != 0 {
					continue
				}

				// Calculate the expected 4th point of the rectangle
				dx := bx + cx - ax
				dy := by + cy - ay

				// Skip if 4th point doesn't exist in our point set
				if !pointSet[pointToKey(dx, dy)] {
					continue
				}

				// Calculate lengths of sides and area
				abLen := math.Hypot(float64(abx), float64(aby))
				acLen := math.Hypot(float64(acx), float64(acy))
				area := abLen * acLen

				// Update minimum area if current rectangle has smaller area
				if area < minArea {
					minArea = area
				}
			}
		}
	}

	// Return 0 if no valid rectangle found, otherwise return minimum area
	if math.IsInf(minArea, 1) {
		return 0
	}

	return minArea
}

func pointToKey(x, y int) string {
	// Return a string representation of the point for map key
	return strconv.Itoa(x) + "-" + strconv.Itoa(y)
}