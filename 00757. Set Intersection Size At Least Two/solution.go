/**
 * Problem: 757. Set Intersection Size At Least Two
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

func intersectionSizeTwo(intervals [][]int) int {
	// Sort the intervals by their ending points in ascending order
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][1] < intervals[j][1]
	})

	// Initialize the first two points of the set from the first interval
	prev1, prev2 := intervals[0][1]-1, intervals[0][1]

	// Initialize the count of points in the set to 2
	count := 2

	// Iterate through the remaining intervals
	for i := 1; i < len(intervals); i++ {
		// Extract the start and end points of the current interval
		start, end := intervals[i][0], intervals[i][1]

		// Check if the current interval does not overlap with the set
		if prev2 < start {
			// Add two new points from the current interval
			prev1 = end - 1
			prev2 = end
			count += 2
		} else if prev1 < start {
			// Check if only one point overlaps with the current interval
			if end == prev2 {
				// Adjust the first point to maintain the overlap
				prev1 = end - 1
			} else {
				// Add one new point from the current interval
				prev1 = end
			}

			// Ensure prev1 is always less than prev2
			if prev1 > prev2 {
				prev1, prev2 = prev2, prev1
			}

			// Increment the count as one new point is added
			count++
		}
	}

	// Return the total count of points in the set
	return count
}
