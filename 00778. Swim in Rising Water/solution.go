/**
 * Problem: 778. Swim in Rising Water
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func swimInWater(grid [][]int) int {
	// n stores the size of the grid (n x n).
	n := len(grid)

	// maxHeight keeps track of the highest elevation in the grid.
	var maxHeight int

	// Iterate through the grid to find the maximum elevation.
	for i := range n {
		for j := range n {
			maxHeight = max(maxHeight, grid[i][j])
		}
	}

	// ans will store the final answer (minimum time to reach the end).
	var ans int

	// memo is a 2D slice used for memoization to avoid revisiting states.
	memo := make([][]int, n)

	// Initialize memoization grid with zero values.
	for i := range memo {
		memo[i] = make([]int, n)
	}

	// low and high define the binary search range for the minimum time.
	low, high := max(grid[0][0], grid[n-1][n-1]), maxHeight
	
	// Binary search to find the minimum time required to reach the destination.
	for low <= high {
		// mid represents the current time being tested.
		mid := low + (high-low)/2

		// If it's possible to swim at time mid, update ans and search for a smaller time.
		if canSwim(grid, memo, 0, 0, mid) {
			ans = mid
			high = mid - 1
		} else {
			// Otherwise, search for a larger time.
			low = mid + 1
		}
	}

	// Return the minimum time found.
	return ans
}

// canSwim checks if it's possible to reach the bottom-right corner at or before maxHeight.
func canSwim(grid, memo [][]int, i, j, maxHeight int) bool {
	// Return false if out of bounds.
	if i < 0 || i >= len(grid) || j < 0 || j >= len(grid) {
		return false
	}
	// Return false if the current cell's elevation is greater than maxHeight.
	if grid[i][j] > maxHeight {
		return false
	}
	// Return true if the destination is reached.
	if i == len(grid)-1 && j == len(grid)-1 {
		return true
	}
	// Return false if this cell has already been visited at this maxHeight.
	if memo[i][j] == maxHeight {
		return false
	}

	// Store the original value of the current cell.
	orig := grid[i][j]
	// Mark the current cell as visited by setting it to MaxInt.
	grid[i][j] = math.MaxInt

	// Try moving in all four directions.
	for _, d := range directions {
		if canSwim(grid, memo, i+d.i, j+d.j, maxHeight) {
			// Restore the original value before returning.
			grid[i][j] = orig
			return true
		}
	}

	// Mark this cell as visited for this maxHeight in memo.
	memo[i][j] = maxHeight
	// Restore the original value of the cell.
	grid[i][j] = orig

	// Return false if no path is found.
	return false
}

// directions defines the four possible moves: right, down, left, up.
var directions = []struct{ i, j int }{
	{0, 1}, {1, 0}, {0, -1}, {-1, 0},
}
