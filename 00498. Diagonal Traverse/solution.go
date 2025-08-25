/**
 * Problem: 498. Diagonal Traverse
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findDiagonalOrder(mat [][]int) []int {
	// Get the number of rows (m) and columns (n) in the matrix
	m, n := len(mat), len(mat[0])
	// Initialize the result slice with capacity equal to total elements
	result := make([]int, 0, m*n)

	// Define directions for diagonal traversal: up-right and down-left
	dirs := [2][2]int{{-1, 1}, {1, -1}}
	// Initialize row and col pointers, and direction index (d)
	row, col, d := 0, 0, 0

	// Iterate over all elements in the matrix
	for i := 0; i < m*n; i++ {
		// Append the current element to the result
		result = append(result, mat[row][col])
		// Move to the next element in the current diagonal direction
		row += dirs[d][0]
		col += dirs[d][1]

		// Check if row pointer exceeds the bottom boundary
		if row >= m {
			row = m - 1        // Set row to last valid index
			col += 2           // Move col to next diagonal start
			d ^= 1             // Switch direction
		// Check if col pointer exceeds the right boundary
		} else if col >= n {
			col = n - 1        // Set col to last valid index
			row += 2           // Move row to next diagonal start
			d ^= 1             // Switch direction
		// Check if row pointer goes above the top boundary
		} else if row < 0 {
			row = 0            // Reset row to first index
			d ^= 1             // Switch direction
		// Check if col pointer goes left of the boundary
		} else if col < 0 {
			col = 0            // Reset col to first index
			d ^= 1             // Switch direction
		}
	}
	
	// Return the result slice containing diagonal order
	return result
}
