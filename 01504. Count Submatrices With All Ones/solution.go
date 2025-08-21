/**
 * Problem: 1504. Count Submatrices With All Ones
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numSubmat(mat [][]int) int {
	// m: number of rows in mat
	m := len(mat)
	// n: number of columns in mat
	n := len(mat[0])
	// heights: slice to store the height of consecutive ones for each column
	heights := make([]int, n)
	// totalCount: variable to accumulate the answer
	totalCount := 0

	// Iterate through each row of the matrix
	for row := 0; row < m; row++ {
		// Update heights for each column
		for col := 0; col < n; col++ {
			if mat[row][col] == 1 {
				// Increment height if current cell is 1
				heights[col] += 1
			} else {
				// Reset height to 0 if current cell is 0
				heights[col] = 0
			}
		}
		// Add the count of rectangles for the current row's heights
		totalCount += countRectangles(heights)
	}

	// Return the total count of submatrices with all ones
	return totalCount
}

// countRectangles calculates the number of submatrices ending at each column for a given row.
// heights: slice representing the height of consecutive ones for each column.
// Returns the count of submatrices for the current row.
func countRectangles(heights []int) int {
	// n: number of columns
	n := len(heights)
	// sum: slice to store the cumulative count of rectangles ending at each column
	sum := make([]int, n)
	// stack: stores indices of columns for monotonic stack processing
	stack := []int{}
	// count: variable to accumulate the result
	count := 0

	// Iterate through each column
	for col := 0; col < n; col++ {
		// Maintain a monotonic increasing stack for heights
		for len(stack) > 0 && heights[stack[len(stack)-1]] >= heights[col] {
			stack = stack[:len(stack)-1]
		}

		if len(stack) > 0 {
			// If stack is not empty, calculate sum based on previous index
			sum[col] = sum[stack[len(stack)-1]] + heights[col]*(col-stack[len(stack)-1])
		} else {
			// If stack is empty, calculate sum for all columns up to current
			sum[col] = heights[col] * (col + 1)
		}

		// Push current column index to stack
		stack = append(stack, col)
		// Accumulate the count
		count += sum[col]
	}

	// Return the count of submatrices for the current row
	return count
}
