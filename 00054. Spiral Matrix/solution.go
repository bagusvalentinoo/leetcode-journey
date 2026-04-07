/**
 * Problem: 54. Spiral Matrix
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func spiralOrder(matrix [][]int) []int {
	// Array to store spiral order elements
	result := make([]int, 0)

	// Initialize top and bottom row boundaries
	top, bottom := 0, len(matrix)-1

	// Initialize left and right column boundaries
	left, right := 0, len(matrix[0])-1

	// Continue while boundaries haven't crossed
	for top <= bottom && left <= right {
		// Traverse top row from left to right
		for i := left; i <= right; i++ {
			result = append(result, matrix[top][i])
		}

		// Move top boundary down
		top++

		// Traverse right column from top to bottom
		for i := top; i <= bottom; i++ {
			result = append(result, matrix[i][right])
		}

		// Move right boundary left
		right--

		// Check if there are rows remaining
		if top <= bottom {
			// Traverse bottom row from right to left
			for i := right; i >= left; i-- {
				result = append(result, matrix[bottom][i])
			}
		}

		// Move bottom boundary up
		bottom--

		// Check if there are columns remaining
		if left <= right {
			// Traverse left column from bottom to top
			for i := bottom; i >= top; i-- {
				result = append(result, matrix[i][left])
			}
		}

		// Move left boundary right
		left++
	}

	// Return spiral order traversal
	return result
}
