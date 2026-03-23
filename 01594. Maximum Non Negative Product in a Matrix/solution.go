/**
 * Problem: 1594. Maximum Non Negative Product in a Matrix
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxProductPath(grid [][]int) int {
	// Modulo constant for result
	const MOD = 1000000007

	// Get grid dimensions
	rows, cols := len(grid), len(grid[0])

	// DP arrays to track max and min products at each cell
	// Track both because negative numbers can flip min to max
	maxProduct, minProduct := make([][]int64, rows), make([][]int64, rows)

	// Initialize DP arrays for each row
	for i := 0; i < rows; i++ {
		maxProduct[i] = make([]int64, cols)
		minProduct[i] = make([]int64, cols)
	}

	// Initialize starting cell
	maxProduct[0][0] = int64(grid[0][0])
	minProduct[0][0] = int64(grid[0][0])

	// Fill DP table row by row
	for row := 0; row < rows; row++ {
		for col := 0; col < cols; col++ {
			// Skip starting cell
			if row == 0 && col == 0 {
				continue
			}

			// Initialize maxVal and minVal with the smallest and largest possible int64 values
			maxVal, minVal := int64(-1<<62), int64(1<<62)

			// From top cell (if exists)
			if row > 0 {
				// Calculate product from top cell using both max and min paths
				// Because multiplying by current cell could flip max/min if current cell is negative
				val1, val2 := maxProduct[row-1][col]*int64(grid[row][col]), minProduct[row-1][col]*int64(grid[row][col])

				// Update maxVal: take the larger of the two possible products from top
				if val1 > maxVal {
					maxVal = val1
				}
				if val2 > maxVal {
					maxVal = val2
				}
				// Update minVal: take the smaller of the two possible products from top
				if val1 < minVal {
					minVal = val1
				}
				if val2 < minVal {
					minVal = val2
				}
			}

			// From left cell (if exists)
			if col > 0 {
				// Calculate product from left cell using both max and min paths
				// Because multiplying by current cell could flip max/min if current cell is negative
				val1, val2 := maxProduct[row][col-1]*int64(grid[row][col]), minProduct[row][col-1]*int64(grid[row][col])

				// Update maxVal: take the larger of the two possible products from left
				if val1 > maxVal {
					maxVal = val1
				}
				if val2 > maxVal {
					maxVal = val2
				}
				// Update minVal: take the smaller of the two possible products from left
				if val1 < minVal {
					minVal = val1
				}
				if val2 < minVal {
					minVal = val2
				}
			}

			// Store the best max and min for current cell
			maxProduct[row][col] = maxVal
			minProduct[row][col] = minVal
		}
	}

	// Get final product at bottom-right corner
	finalProduct := maxProduct[rows-1][cols-1]

	// Return result modulo MOD if positive, otherwise -1
	if finalProduct >= 0 {
		return int(finalProduct % MOD)
	}

	// If the maximum product is negative, return -1
	return -1
}
