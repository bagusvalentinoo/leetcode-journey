/**
 * Problem: 1536. Minimum Swaps to Arrange a Binary Grid
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minSwaps(grid [][]int) int {
	// Get grid size
	size := len(grid)

	// Array to store trailing zeros count for each row
	trailingZeros := make([]int, size)

	// Calculate trailing zeros for each row
	for row := 0; row < size; row++ {
		// Count of trailing zeros for current row
		zeroCount := 0

		// Count trailing zeros from rightmost column to leftmost column
		for col := size - 1; col >= 0; col-- {
			// If zero, increment count
			if grid[row][col] == 0 {
				zeroCount++
			} else {
				// If one, break
				break
			}
		}

		trailingZeros[row] = zeroCount
	}

	// Track total swaps performed
	swaps := 0

	// Process each row from top to bottom
	for row := 0; row < size; row++ {
		// Required trailing zeros for current row
		requiredZeros := size - row - 1

		// Find row with enough trailing zeros at or below current position
		foundIndex := -1

		// Search for row with enough trailing zeros
		for j := row; j < size; j++ {
			// If found, store index and break
			if trailingZeros[j] >= requiredZeros {
				// Store index of found row
				foundIndex = j

				// Break loop
				break
			}
		}

		// If no suitable row found, configuration is impossible
		if foundIndex == -1 {
			return -1
		}

		// Bubble up the found row to its correct position
		for foundIndex > row {
			// Swap with row above
			trailingZeros[foundIndex], trailingZeros[foundIndex-1] = trailingZeros[foundIndex-1], trailingZeros[foundIndex]

			// Move found row up
			foundIndex--
			// Increment swap count
			swaps++
		}
	}

	// Return total swaps performed
	return swaps
}
