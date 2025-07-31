/**
 * Problem: 1093. Statistics from a Large Sample
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sampleStats(count []int) []float64 {
	// Initialize variables for statistics
	min := -1      // Minimum value in the sample
	max := 0       // Maximum value in the sample
	sum := 0       // Sum of all values in the sample
	mode := 0      // Value that appears most frequently
	modeCount := 0 // Frequency of the mode
	totalCount := 0 // Total number of samples

	// Iterate over count array to compute min, max, sum, mode, and totalCount
	for value, frequency := range count {
		if frequency > 0 {
			if min == -1 {
				min = value // Set min to the first value with non-zero frequency
			}

			max = value // Update max to the current value

			if frequency > modeCount {
				modeCount = frequency // Update modeCount if current frequency is higher
				mode = value          // Update mode to current value
			}

			sum += value * frequency // Add current value's contribution to sum
			totalCount += frequency  // Add current frequency to totalCount
		}
	}

	// Calculate mean value
	mean := float64(sum) / float64(totalCount)

	// Variables to find median values
	median1, median2 := -1, -1
	cumulativeCount := 0

	// Iterate again to find median positions
	for value, frequency := range count {
		cumulativeCount += frequency // Accumulate frequencies

		// Find the first median position
		if median1 == -1 && cumulativeCount >= (totalCount+1)/2 {
			median1 = value
		}
		// Find the second median position (for even-sized samples)
		if cumulativeCount >= (totalCount+2)/2 {
			median2 = value
			break // Both median positions found
		}
	}

	// Calculate median value
	median := float64(median1 + median2) / 2.0

	// Return statistics as a float64 slice: [min, max, mean, median, mode]
	return []float64{
		float64(min),
		float64(max),
		mean,
		median,
		float64(mode),
	}
}
