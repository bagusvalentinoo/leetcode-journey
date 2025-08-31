/**
 * Problem: 1200. Minimum Absolute Difference
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

func minimumAbsDifference(arr []int) [][]int {
	// Initialize minVal and maxVal to track the minimum and maximum values in arr
	minVal, maxVal := math.MaxInt, math.MinInt

	// Find the minimum and maximum values in arr
	for _, v := range arr {
		minVal = min(minVal, v)
		maxVal = max(maxVal, v)
	}

	// Create a boolean slice to mark the existence of each value in arr
	exists := make([]bool, maxVal-minVal+1)

	// Mark the presence of each value in arr
	for _, v := range arr {
		exists[v-minVal] = true
	}

	// Initialize minDiff to the largest possible integer value
	minDiff := math.MaxInt
	var prev int // prev stores the previous index with a value present
	var result [][]int // result stores pairs with the minimum absolute difference

	// Iterate through the exists slice to find pairs with the minimum absolute difference
	for i := 1; i < len(exists); i++ {
		if exists[i] {
			diff := i - prev // Calculate the difference between current and previous value

			if diff == minDiff {
				// If current difference equals minDiff, append the pair to result
				result = append(result, []int{prev + minVal, i + minVal})
			} else if diff < minDiff {
				// If current difference is less than minDiff, update minDiff and reset result
				minDiff = diff
				result = [][]int{{prev + minVal, i + minVal}}
			}

			// Update prev to current index
			prev = i
		}
	}

	// Return all pairs with the minimum absolute difference
	return result
}
