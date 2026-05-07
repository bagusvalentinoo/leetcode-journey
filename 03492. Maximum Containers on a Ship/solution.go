/**
 * Problem: 3492. Maximum Containers on a Ship
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxContainers(n int, w int, maxWeight int) int {
	// Calculate maximum containers based on grid size (n x n)
	maxByGrid := n * n

	// Calculate maximum containers based on weight capacity
	maxByWeight := maxWeight / w

	// Return the smaller value as the limiting factor
	if maxByGrid < maxByWeight {
		return maxByGrid
	}

	// Weight capacity is the limiting factor
	return maxByWeight
}
