/**
 * Problem: 1878. Get Biggest Three Rhombus Sums in a Grid
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func getBiggestThree(grid [][]int) []int {
	// Get grid dimensions
	rows, cols := len(grid), len(grid[0])

	// Slice to store top 3 largest distinct sums
	topSums := []int{0, 0, 0}

	// Helper function to insert value into topSums if it's among top 3 distinct values
	insertIntoTops := func(value int) {
		// Skip if value already exists in topSums
		if value == topSums[0] || value == topSums[1] || value == topSums[2] {
			return
		}

		// If value is larger than the largest, shift all down
		if value > topSums[0] {
			topSums[2] = topSums[1]
			topSums[1] = topSums[0]
			topSums[0] = value
		} else if value > topSums[1] {
			// If value is larger than second largest, shift second down
			topSums[2] = topSums[1]
			topSums[1] = value
		} else if value > topSums[2] {
			// If value is larger than third largest, replace third
			topSums[2] = value
		}
	}

	// Iterate through each cell as potential rhombus center
	for centerRow := 0; centerRow < rows; centerRow++ {
		for centerCol := 0; centerCol < cols; centerCol++ {
			// Add single cell (rhombus of size 1)
			insertIntoTops(grid[centerRow][centerCol])

			// Maximum possible rhombus size from this center
			maxRhombusSize := min(
				min(centerRow, rows-1-centerRow),
				min(centerCol, cols-1-centerCol),
			)

			// Try all possible rhombus sizes from this center
			for size := 1; size <= maxRhombusSize; size++ {
				// Accumulator for current rhombus sum
				rhombusSum := 0

				// Walk around the four sides of the rhombus
				for step := 0; step < size; step++ {
					// Top-right side
					rhombusSum += grid[centerRow-size+step][centerCol+step]
					// Right-bottom side
					rhombusSum += grid[centerRow+step][centerCol+size-step]
					// Bottom-left side
					rhombusSum += grid[centerRow+size-step][centerCol-step]
					// Left-top side
					rhombusSum += grid[centerRow-step][centerCol-size+step]
				}

				// Try to insert rhombus sum into top 3
				insertIntoTops(rhombusSum)
			}
		}
	}

	// Create result slice
	result := make([]int, 0)

	// Iterate through each value in topSums
	for _, val := range topSums {
		// Only include positive values
		if val > 0 {
			result = append(result, val)
		}
	}

	// Return the filtered result
	return result
}
