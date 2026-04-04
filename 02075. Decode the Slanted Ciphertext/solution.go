/**
 * Problem: 2075. Decode the Slanted Ciphertext
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func decodeCiphertext(encodedText string, rows int) string {
	// If only one row, the text is already in original order
	if rows == 1 {
		return encodedText
	}

	// Get total length of encoded text
	totalLength := len(encodedText)
	// Calculate number of columns in the grid
	cols := totalLength / rows

	// Initialize indices: row, column, position in encoded text
	row, col, position := 0, 0, 0

	// Store decoded characters
	decoded := make([]byte, 0)

	// Traverse the grid in diagonal order
	for position < totalLength {
		// Add character at current position to decoded string
		decoded = append(decoded, encodedText[position])
		// Move to next row
		row++

		// If reached bottom row, move to next column and reset row
		if row == rows {
			row = 0
			col++
		}

		// Calculate next position in encoded text
		position = row*(cols+1) + col
	}

	// Convert byte slice to string
	result := string(decoded)
	// Remove all trailing spaces from the result string
	result = strings.TrimRight(result, " ")

	// Return the decoded text without trailing spaces
	return result
}
