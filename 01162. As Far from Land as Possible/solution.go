/**
 * Problem: 1162. As Far from Land as Possible
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

func maxDistance(grid [][]int) int {
	// Get the size of the grid (assuming square grid)
	n := len(grid)
	// Variable to store the maximum distance found
	res := 0
	// Set an initial large distance value (greater than any possible distance in the grid)
	maxDistance := 2 * n

	// First pass: Top-left to bottom-right
	for row := 0; row < n; row++ {
		for col := 0; col < n; col++ {
			// If current cell is land, set distance to 0
			if grid[row][col] == 1 {
				grid[row][col] = 0
			} else {
				// If current cell is water, initialize with maxDistance
				grid[row][col] = maxDistance

				// Update distance from top neighbor if exists
				if row > 0 {
					grid[row][col] = min(grid[row][col], grid[row-1][col]+1)
				}
				// Update distance from left neighbor if exists
				if col > 0 {
					grid[row][col] = min(grid[row][col], grid[row][col-1]+1)
				}
			}
		}
	}

	// Second pass: Bottom-right to top-left
	for row := n - 1; row >= 0; row-- {
		for col := n - 1; col >= 0; col-- {
			// Update distance from bottom neighbor if exists
			if row < n-1 {
				grid[row][col] = min(grid[row][col], grid[row+1][col]+1)
			}
			// Update distance from right neighbor if exists
			if col < n-1 {
				grid[row][col] = min(grid[row][col], grid[row][col+1]+1)
			}

			// Track the maximum distance found so far
			res = max(res, grid[row][col])
		}
	}

	// If no water cell or no land cell exists, return -1
	if res == 0 {
		return -1
	}
	if res == maxDistance {
		return -1
	}

	// Return the maximum distance from water to land
	return res
}
