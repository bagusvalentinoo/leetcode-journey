/**
 * Problem: 120. Triangle
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumTotal(triangle [][]int) int {
	// Get the number of rows in the triangle
	numRows := len(triangle)

	// Iterate from the second last row up to the top row
	for row := numRows - 2; row >= 0; row-- {
		// Iterate through each element in the current row
		for col := 0; col < len(triangle[row]); col++ {
			// Compare the two adjacent numbers in the row below and add the minimum to the current element
			if triangle[row+1][col] < triangle[row+1][col+1] {
				triangle[row][col] += triangle[row+1][col]
			} else {
				triangle[row][col] += triangle[row+1][col+1]
			}
		}
	}

	// The top element now contains the minimum path sum
	return triangle[0][0]
}
