/**
 * Problem: 1380. Lucky Numbers in a Matrix
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func luckyNumbers(matrix [][]int) []int {
	// Slice to store lucky numbers found
	luckyNumbersList := make([]int, 0)

	// Iterate through each row in the matrix
	for _, currentRow := range matrix {
		// Initialize row minimum with the first element of the row
		rowMinimum := currentRow[0]
		// Initialize column index of the minimum value
		minColumnIndex := 0

		// Iterate through each element in the current row to find the minimum
		for i, val := range currentRow {
			// If current value is smaller than current row minimum
			if val < rowMinimum {
				// Update row minimum to the new smaller value
				rowMinimum = val
				// Update column index where the minimum was found
				minColumnIndex = i
			}
		}

		// Flag to track if current minimum is also maximum in its column
		isLuckyNumber := true

		// Check if the found minimum is the maximum in its column
		for _, checkRow := range matrix {
			// If any element in this column is greater than rowMinimum, it's not lucky
			if checkRow[minColumnIndex] > rowMinimum {
				isLuckyNumber = false
				break
			}
		}

		// If the number passes both conditions, add it to result
		if isLuckyNumber {
			luckyNumbersList = append(luckyNumbersList, rowMinimum)
		}
	}

	// Return the list of lucky numbers found
	return luckyNumbersList
}
