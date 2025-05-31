/**
 * Problem: 1001. Grid Illumination
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 50 ms (Beats 100%)
 */

func gridIllumination(n int, lamps, queries [][]int) []int {
	// Map to track active lamp positions
	activeLamps := map[int]struct{}{}

	// Maps to track lamps in each row, column, and diagonal
	rowLamps, colLamps := map[int]uint32{}, map[int]uint32{}
	diag1Lamps, diag2Lamps := map[int]uint32{}, map[int]uint32{}

	// Initialize lamp positions
	for _, lamp := range lamps {
		activeLamps[lamp[0]*n+lamp[1]] = struct{}{}
	}

	// Count lamps in each row, column, and diagonal
	for pos := range activeLamps {
		row, col := pos/n, pos%n

		rowLamps[row]++
		colLamps[col]++
		diag1Lamps[col-row]++
		diag2Lamps[col+row]++
	}

	// Function to turn off a lamp at specified position
	turnOffLamp := func(row, col int) {
		if row == -1 || row == n || col == -1 || col == n {
			return
		} else if _, ok := activeLamps[row*n+col]; !ok {
			return
		}

		delete(activeLamps, row*n+col)

		rowLamps[row]--
		colLamps[col]--
		diag1Lamps[col-row]--
		diag2Lamps[col+row]--
	}

	// Prepare result array
	res := make([]int, len(queries))

	// Process each query
	for j, query := range queries {
		row, col := query[0], query[1]

		// Check if cell is illuminated
		if rowLamps[row] == 0 && colLamps[col] == 0 && diag1Lamps[col-row] == 0 && diag2Lamps[col+row] == 0 {
			continue
		}

		res[j] = 1

		// Turn off lamp at query position and all 8 adjacent positions
		turnOffLamp(row, col)
		turnOffLamp(row-1, col-1)
		turnOffLamp(row, col-1)
		turnOffLamp(row+1, col-1)
		turnOffLamp(row+1, col)
		turnOffLamp(row+1, col+1)
		turnOffLamp(row, col+1)
		turnOffLamp(row-1, col+1)
		turnOffLamp(row-1, col)
	}

	return res
}