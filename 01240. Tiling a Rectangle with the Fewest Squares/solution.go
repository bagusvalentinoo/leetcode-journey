/**
 * Problem: 1240. Tiling a Rectangle with the Fewest Squares
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// ans stores the minimum number of squares needed to tile the rectangle.
var ans int

// tilingRectangle returns the minimum number of squares needed to tile an n x m rectangle.
func tilingRectangle(n int, m int) int {
	// Initialize ans to the maximum possible integer value.
	ans = math.MaxInt32

	// Create a 2D slice to represent the rectangle, initialized to false.
	rect := make([][]bool, n)
	for i := range rect {
		rect[i] = make([]bool, m)
	}

	// Start the depth-first search from the top-left corner with 0 squares used.
	dfs(0, 0, rect, 0)

	// Return the minimum number of squares found.
	return ans
}

// dfs recursively tries to fill the rectangle using the fewest squares.
func dfs(row, col int, rect [][]bool, count int) {
	n := len(rect)
	m := len(rect[0])

	// Prune the search if the current count is not better than the best answer.
	if count >= ans {
		return
	}

	// If all rows are filled, update the answer.
	if row >= n {
		ans = count
		return
	}

	// Move to the next row if the current column exceeds the rectangle width.
	if col >= m {
		dfs(row+1, 0, rect, count)
		return
	}

	// Skip the cell if it is already covered.
	if rect[row][col] {
		dfs(row, col+1, rect, count)
		return
	}

	// Try to place the largest possible square at the current position.
	for size := min(n-row, m-col); size >= 1 && isAvailable(rect, row, col, size); size-- {
		cover(rect, row, col, size)
		dfs(row, col+1, rect, count+1)
		uncover(rect, row, col, size)
	}
}

// isAvailable checks if a square of size k can be placed at (row, col).
func isAvailable(rect [][]bool, row, col, size int) bool {
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			if rect[row+i][col+j] {
				return false
			}
		}
	}
	return true
}

// cover marks a square of size k as covered starting from (row, col).
func cover(rect [][]bool, row, col, size int) {
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			rect[row+i][col+j] = true
		}
	}
}

// uncover removes the covered mark for a square of size k starting from (row, col).
func uncover(rect [][]bool, row, col, size int) {
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			rect[row+i][col+j] = false
		}
	}
}
