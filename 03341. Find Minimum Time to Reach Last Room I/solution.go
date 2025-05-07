/**
 * Problem: 3341. Find Minimum Time to Reach Last Room I
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 12 ms (Beats 100%)
 */

import (
	"math"
)

// minTimeToReach calculates the minimum time to reach the bottom-right cell
// in a grid where each cell contains a time value.
func minTimeToReach(moveTime [][]int) int {
	// Get grid dimensions
	rows := len(moveTime)

	if rows == 0 {
		return 0
	}

	cols := len(moveTime[0])

	if cols == 0 {
		return 0
	}

	// Define possible movement directions (right, left, down, up)
	dirs := [4][2]int{{0, 1}, {0, -1}, {1, 0}, {-1, 0}}

	// Helper function to check if coordinates are within bounds
	inBounds := func(r, c int) bool {
		return r >= 0 && c >= 0 && r < rows && c < cols
	}

	// Initialize matrix with MaxInt values to track minimum times
	matrix := make([][]int, rows)

	for i := range matrix {
		matrix[i] = make([]int, cols)

		for j := range matrix[i] {
			matrix[i][j] = math.MaxInt32
		}
	}

	// Queue starting with [row, column, time] at top-left position
	queue := [][3]int{{0, 0, 0}}

	// BFS implementation to find minimum times
	for len(queue) > 0 {
		// Temporary queue for next iteration
		temp := [][3]int{}

		// Process all cells at current time level
		for len(queue) > 0 {
			// Pop from queue (using last element for efficiency)
			item := queue[len(queue)-1]
			queue = queue[:len(queue)-1]
			r, c, t := item[0], item[1], item[2]

			// Skip if we already found a faster path to this cell
			if matrix[r][c] <= t {
				continue
			}

			// Update minimum time to reach this cell
			matrix[r][c] = t

			// Check all four directions
			for _, dir := range dirs {
				ar := r + dir[0]
				ac := c + dir[1]

				// Skip if out of bounds
				if !inBounds(ar, ac) {
					continue
				}
				// Skip if we already found a faster path
				if matrix[ar][ac] <= t+1 {
					continue
				}

				// Calculate arrival time (max of current time and cell's own time, plus 1)
				at := t + 1
				
				if moveTime[ar][ac] > t {
					at = moveTime[ar][ac] + 1
				}

				// Add to next iteration queue
				temp = append(temp, [3]int{ar, ac, at})
			}
		}

		// Update queue for next iteration
		queue = temp
	}

	// Return minimum time to reach bottom-right cell
	return matrix[rows-1][cols-1]
}