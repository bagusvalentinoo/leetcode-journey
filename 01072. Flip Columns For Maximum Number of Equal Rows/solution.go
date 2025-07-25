/**
 * Problem: 1072. Flip Columns For Maximum Number of Equal Rows
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 1 ms (Beats 100%)
 */

func maxEqualRowsAfterFlips(mat [][]int) int {
	// patFreq maps each unique normalized row pattern to its frequency.
	patFreq := make(map[string]int)
	// maxFreq keeps track of the maximum frequency of any pattern.
	maxFreq := 0

	// Iterate over each row in the matrix.
	for _, row := range mat {
		// pattern will store the normalized pattern for the current row.
		pattern := make([]byte, len(row))
		// first stores the value of the first element in the row.
		first := 0

		// Normalize the row so that all rows that can be made equal by flipping columns have the same pattern.
		for i, bit := range row {
			if i == 0 {
				first = bit // Set the reference bit for normalization.
			}

			if bit == first {
				pattern[i] = '0' // If the bit matches the first, set to '0'.
			} else {
				pattern[i] = '1' // If the bit differs, set to '1'.
			}
		}

		// Increment the frequency of the normalized pattern.
		patFreq[string(pattern)]++

		// Update maxFreq if the current pattern's frequency is greater.
		maxFreq = max(maxFreq, patFreq[string(pattern)])
	}

	// Return the maximum frequency found, which is the answer.
	return maxFreq
}
