/**
 * Problem: 3197. Find the Minimum Area to Cover All Ones II
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

// minimumArea calculates the minimum area to cover all ones in the given 2D grid.
// It returns a DP table f where f[i][j] is the minimum area covering up to (i, j).
func minimumArea(grid [][]int) [][]int {
	m, n := len(grid), len(grid[0]) // Get grid dimensions
	f := make([][]int, m+1)         // DP table for minimum area

	for i := range f {
		f[i] = make([]int, n+1) // Initialize each row of DP table
	}

	// Struct to store border information for each column
	type borderInfo struct{ top, left, right int }

	border := make([]borderInfo, n) // Track border info for each column

	for j := range border {
		border[j].top = -1 // Initialize top to -1 (no ones found yet)
	}

	for i, row := range grid {
		left, right := -1, 0 // Track leftmost and rightmost one in current row

		for j, val := range row {
			if val > 0 {
				if left < 0 {
					left = j // Update leftmost one
				}
				right = j // Update rightmost one
			}

			prevBorder := border[j] // Previous border info for column j

			// If no ones in current row so far, inherit previous DP value
			if left < 0 {
				f[i+1][j+1] = f[i][j+1]
			} else if prevBorder.top < 0 {
				// First time seeing a one in this column, area is width of ones in row
				f[i+1][j+1] = right - left + 1
				border[j] = borderInfo{i, left, right} // Update border info
			} else {
				// Extend previous rectangle to include current row
				l, r := min(prevBorder.left, left), max(prevBorder.right, right)
				f[i+1][j+1] = (r - l + 1) * (i - prevBorder.top + 1)
				border[j] = borderInfo{prevBorder.top, l, r} // Update border info
			}
		}
	}

	return f // Return DP table
}

// minimumSum finds the minimum area to cover all ones in the grid by considering different splits and rotations.
func minimumSum(grid [][]int) int {
	ans := math.MaxInt // Initialize answer to maximum integer

	// Helper function to process grid and update ans
	process := func(a [][]int) {
		m, n := len(a), len(a[0]) // Get grid dimensions

		// Struct to store left and rightmost ones in each row
		type rowRange struct{ left, right int }

		rowRanges := make([]rowRange, m) // Store left/right indices for each row

		for i, row := range a {
			left, right := -1, 0 // Track leftmost and rightmost one in row

			for j, val := range row {
				if val > 0 {
					if left < 0 {
						left = j // Update leftmost one
					}
					right = j // Update rightmost one
				}
			}

			rowRanges[i] = rowRange{left, right} // Store range for row
		}

		// Calculate minimum area DP tables for all four corners
		topLeft := minimumArea(a)
		a = rotate(a)
		bottomLeft := rotate(rotate(rotate(minimumArea(a))))
		a = rotate(a)
		bottomRight := rotate(rotate(minimumArea(a)))
		a = rotate(a)
		topRight := rotate(minimumArea(a))

		// Consider vertical splits if there are at least 3 rows
		if m >= 3 {
			for i := 1; i < m; i++ {
				left, right, top, bottom := n, 0, m, 0 // Initialize rectangle bounds

				for j := i + 1; j < m; j++ {
					if p := rowRanges[j-1]; p.left >= 0 {
						left = min(left, p.left)
						right = max(right, p.right)
						top = min(top, j-1)
						bottom = j - 1
					}

					area := topLeft[i][n]
					area += (right - left + 1) * (bottom - top + 1)
					area += bottomLeft[j][n]
					ans = min(ans, area) // Update answer if smaller area found
				}
			}
		}

		// Consider 2D splits if grid is at least 2x2
		if m >= 2 && n >= 2 {
			for i := 1; i < m; i++ {
				for j := 1; j < n; j++ {
					area := topLeft[i][n]
					area += bottomLeft[i][j]
					area += bottomRight[i][j]
					ans = min(ans, area)
					area = topLeft[i][j]
					area += topRight[i][j]
					area += bottomLeft[i][n]
					ans = min(ans, area)
				}
			}
		}
	}

	process(grid)         // Process original grid
	process(rotate(grid)) // Process rotated grid

	return ans // Return minimum area found
}

// rotate rotates the grid 90 degrees clockwise.
func rotate(a [][]int) [][]int {
	m, n := len(a), len(a[0]) // Get grid dimensions

	b := make([][]int, n) // Create new grid for rotated result

	for i := range b {
		b[i] = make([]int, m) // Initialize each row of rotated grid
	}

	for i, row := range a {
		for j, val := range row {
			b[j][m-1-i] = val // Assign value to rotated position
		}
	}

	return b // Return rotated grid
}
