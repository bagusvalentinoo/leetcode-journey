/**
 * Problem: 970. Powerful Integers
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func powerfulIntegers(x int, y int, bound int) []int {
	// Use a map to store unique powerful integers (x^i + y^j ≤ bound)
	resultMap := make(map[int]struct{})

	// Handle edge case: if x is 1, only one iteration needed (1^i = 1 for all i)
	xStep := x
	if x == 1 {
		xStep = bound + 1
	}

	// Handle edge case: if y is 1, only one iteration needed (1^j = 1 for all j)
	yStep := y
	if y == 1 {
		yStep = bound + 1
	}

	// Generate all possible x^i values
	for xi := 1; xi <= bound; xi *= xStep {
		// For each x^i, generate all possible y^j values where x^i + y^j ≤ bound
		for yj := 1; xi+yj <= bound; yj *= yStep {
			// Store each valid powerful integer in the map to ensure uniqueness
			resultMap[xi+yj] = struct{}{}
		}
	}

	// Convert the map keys to a slice for the result
	result := make([]int, 0, len(resultMap))
	for num := range resultMap {
		result = append(result, num)
	}

	// Return the list of powerful integers
	return result
}