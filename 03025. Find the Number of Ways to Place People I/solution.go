/**
 * Problem: 3025. Find the Number of Ways to Place People I
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numberOfPairs(points [][]int) int {
	// Sort the points by x-coordinate ascending, and by y-coordinate descending if x is the same.
	sort.Slice(points, func(i, j int) bool {
		if points[i][0] == points[j][0] {
			return points[i][1] > points[j][1]
		}
		return points[i][0] < points[j][0]
	})

	numPoints := len(points) // Store the number of points for iteration.
	pairCount := 0           // Initialize the result to count valid pairs.

	// Iterate through each point as the first person.
	for i := 0; i < numPoints; i++ {
		maxY := points[i][1]      // The upper bound for y-coordinate.
		minY := -1 << 31          // The lower bound for y-coordinate (minimum int value).

		// Iterate through subsequent points to find valid pairs.
		for j := i + 1; j < numPoints; j++ {
			currentY := points[j][1] // The y-coordinate of the second person.

			// Check if currentY is strictly greater than minY and less than or equal to maxY.
			if minY < currentY && currentY <= maxY {
				pairCount++     // Valid pair found, increment the count.
				minY = currentY // Update minY to currentY for next comparison.

				// If minY reaches maxY, no further valid pairs can be found for this i.
				if minY == maxY {
					break
				}
			}
		}
	}

	// Return the total number of valid pairs found.
	return pairCount
}
