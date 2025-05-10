/**
 * Problem: 957. Prison Cells After N Days
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func prisonAfterNDays(cells []int, n int) []int {
	// Maps to track states and cycles
	dp := make(map[int]int)      // Maps cell state to day number
	mapRs := make(map[int]int)   // Maps day number to cell state
	i := 0
	key := 0

	for i < n {
		i++
		// Create new cell state based on adjacent cells
		nextCells := make([]int, len(cells))

		for i := 1; i < len(cells)-1; i++ {
			// Cell becomes 1 if neighbors match, 0 otherwise
			if cells[i-1] == cells[i+1] {
				nextCells[i] = 1
			}
		}

		cells = nextCells
		// Convert cell array to integer key for efficient comparison
		key = getKey(cells)

		if dp[key] == 0 {
			// First time seeing this state, record it
			dp[key] = i
			mapRs[i] = key
		} else {
			// Found a cycle, calculate the final state using modulo arithmetic
			round := i - dp[key]
			
			return getCels(mapRs[dp[key]+(n-i)%round])
		}
	}

	return getCels(mapRs[i])
}

func getCels(n int) []int {
	cells := make([]int, 8)
	i := 0

	// Convert integer to binary representation in cell array
	for n > 0 {
		cells[i] = n % 2
		n /= 2
		i++
	}

	return cells
}

func getKey(cells []int) int {
	key := 0

	// Use bit manipulation to create unique key from cell state
	for i := range cells {
		if cells[i] == 1 {
			key |= 1 << i
		}
	}

	return key
}