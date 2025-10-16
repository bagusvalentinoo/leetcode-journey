/**
 * Problem: 1252. Cells with Odd Values in a Matrix
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func oddCells(m int, n int, indices [][]int) int {
	// Initialize slice to count increments for each row.
	rows := make([]int, m)
	// Initialize slice to count increments for each column.
	cols := make([]int, n)

	// Iterate over the list of index pairs and update counters.
	for _, index := range indices {
		// Increment the counter for the row in this index pair.
		rows[index[0]]++
		// Increment the counter for the column in this index pair.
		cols[index[1]]++
	}

	// Count how many rows have odd increment counts.
	oddRows := 0

	// Scan all row counters to find odd ones.
	for _, r := range rows {
		// Check if this row's count is odd.
		if r%2 == 1 {
			// Increment the odd row counter.
			oddRows++
		}
	}

	// Count how many columns have odd increment counts.
	oddCols := 0

	// Scan all column counters to find odd ones.
	for _, c := range cols {
		// Check if this column's count is odd.
		if c%2 == 1 {
			// Increment the odd column counter.
			oddCols++
		}
	}

	// Compute total cells with odd values.
	// A cell is odd when its row and column increments sum to an odd number.
	// Formula: oddRows*n + oddCols*m - 2*oddRows*oddCols
	return oddRows*n + oddCols*m - 2*oddRows*oddCols
}
