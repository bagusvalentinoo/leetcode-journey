/**
 * Problem: 118. Pascal's Triangle
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func generate(numRows int) [][]int {
	// Initialize the result slice to hold all rows of Pascal's Triangle.
	triangle := make([][]int, numRows)

	// Iterate over each row index.
	for i := 0; i < numRows; i++ {
		// Create a new row slice with length i+1.
		row := make([]int, i+1)
		// Set the first and last elements of the row to 1.
		row[0], row[i] = 1, 1

		// Fill in the inner elements of the row using values from the previous row.
		for j := 1; j < i; j++ {
			// Each element is the sum of the two elements above it.
			row[j] = triangle[i-1][j-1] + triangle[i-1][j]
		}

		// Assign the constructed row to the triangle.
		triangle[i] = row
	}

	// Return the completed Pascal's Triangle.
	return triangle
}
