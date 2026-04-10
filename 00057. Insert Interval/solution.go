/**
 * Problem: 57. Insert Interval
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func insert(intervals [][]int, newInterval []int) [][]int {
	// Store result intervals
	mergedIntervals := make([][]int, 0)

	// Destructure new interval into start and end values
	start, end := newInterval[0], newInterval[1]

	// Initialize pointer for iteration
	index := 0

	// Get total number of intervals
	totalIntervals := len(intervals)

	// Add all intervals that end before the new interval starts
	for index < totalIntervals && intervals[index][1] < start {
		// Push interval that doesn't overlap
		mergedIntervals = append(mergedIntervals, intervals[index])

		// Move to next interval
		index++
	}

	// Merge all intervals that overlap with the new interval
	for index < totalIntervals && intervals[index][0] <= end {
		// Update start to the minimum value among overlapping intervals
		if intervals[index][0] < start {
			start = intervals[index][0]
		}
		// Update end to the maximum value among overlapping intervals
		if intervals[index][1] > end {
			end = intervals[index][1]
		}

		// Move to next interval
		index++
	}

	// Add the merged interval
	mergedIntervals = append(mergedIntervals, []int{start, end})

	// Add all remaining intervals that start after the merged interval ends
	for index < totalIntervals {
		// Push remaining interval
		mergedIntervals = append(mergedIntervals, intervals[index])

		// Move to next interval
		index++
	}

	// Return the final merged intervals array
	return mergedIntervals
}
