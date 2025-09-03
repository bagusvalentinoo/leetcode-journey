/**
 * Problem: 3027. Find the Number of Ways to Place People II
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 71 ms (Beats 100%)
 */

func numberOfPairs(points [][]int) int {
	// Sort the points by x-coordinate in ascending order.
	// If x-coordinates are equal, sort by y-coordinate in descending order.
	sort.Slice(points, func(i, j int) bool {
		if points[i][0] == points[j][0] {
			return points[i][1] > points[j][1]
		}

		return points[i][0] < points[j][0]
	})
	
	// Initialize the counter for valid pairs.
	pairCount := 0
	// Get the total number of points.
	totalPoints := len(points)
	
	// Iterate through each point as the first point in the pair.
	for i := 0; i < totalPoints; i++ {
		// Set the upper y-coordinate limit for the second point in the pair.
		upperY := points[i][1]
		// Initialize the lower y-coordinate limit to the minimum possible integer value.
		lowerYLimit := -1 << 31
		
		// Iterate through the remaining points to find valid pairs.
		for j := i + 1; j < totalPoints; j++ {
			// Get the y-coordinate of the current candidate point.
			currentY := points[j][1]

			// Check if the current point's y-coordinate is within the valid range.
			if currentY <= upperY && currentY > lowerYLimit {
				// Increment the pair counter as a valid pair is found.
				pairCount++
				// Update the lower y-coordinate limit to the current y-coordinate.
				lowerYLimit = currentY

				// If the current y-coordinate equals the upper limit, stop searching further.
				if currentY == upperY {
					break
				}
			}
		}
	}
	
	// Return the total number of valid pairs found.
	return pairCount
}
