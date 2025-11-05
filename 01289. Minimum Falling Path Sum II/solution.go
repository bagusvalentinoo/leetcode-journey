/**
 * Problem: 1289. Minimum Falling Path Sum II
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

func minFallingPathSum(grid [][]int) int {
	// Get the size of the grid (number of rows/columns)
	n := len(grid)

	// Find the indices of the smallest and second smallest values in the first row
	min1, min2 := mins(grid[0])

	// Iterate through each row starting from the second row
	for i := 1; i < n; i++ {
		// Iterate through each column in the current row
		for j := 0; j < n; j++ {
			// If the current column is not the smallest index from the previous row
			if j != min1 {
				// Add the smallest value from the previous row to the current cell
				grid[i][j] += grid[i-1][min1]
			} else {
				// Otherwise, add the second smallest value from the previous row
				grid[i][j] += grid[i-1][min2]
			}
		}

		// Update the indices of the smallest and second smallest values for the current row
		min1, min2 = mins(grid[i])
	}

	// Return the minimum falling path sum, which is the smallest value in the last row
	return grid[n-1][min1]
}

func mins(nums []int) (int, int) {
	// Initialize variables to store the indices of the smallest and second smallest values
	min1, min2 := -1, -1
	
	// Iterate through the array to find the indices of the smallest and second smallest values
	for i := range nums {
		// If min1 is uninitialized or the current value is smaller than the value at min1
		if min1 == -1 || nums[i] < nums[min1] {
			// Update min2 to the previous min1 and set min1 to the current index
			min1, min2 = i, min1
		} else if min2 == -1 || nums[i] < nums[min2] {
			// If min2 is uninitialized or the current value is smaller than the value at min2
			// Update min2 to the current index
			min2 = i
		}
	}

	// Return the indices of the smallest and second smallest values
	return min1, min2
}
