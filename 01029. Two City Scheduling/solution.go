/**
 * Problem: 1029. Two City Scheduling
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func twoCitySchedCost(costs [][]int) int {
	// Sort the costs based on the difference between the cost of city A and city B
	sort.Slice(costs, func(i, j int) bool {
		return (costs[i][0] - costs[i][1]) < (costs[j][0] - costs[j][1])
	})

	totalCost := 0
	n := len(costs) / 2

	// Calculate the total cost for sending n people to city A and n people to city B
	for i := 0; i < n; i++ {
		totalCost += costs[i][0] // Cost for city A
		totalCost += costs[i+n][1] // Cost for city B
	}

	return totalCost
}
