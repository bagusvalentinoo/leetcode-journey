/**
 * Problem: 983. Minimum Cost For Tickets
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func mincostTickets(days []int, costs []int) int {
	// Number of days in the travel plan
	n := len(days)

	// Array to store minimum cost to travel up to each day index
	minCost := make([]int, n+1)
	
	// Initialize minCost with high values except for day 0
	for i := 1; i <= n; i++ {
		minCost[i] = 1000000
	}

	// Coverage period for each pass type (1-day, 7-day, 30-day)
	passDurations := []int{1, 7, 30}

	// Calculate minimum cost for each day
	for i := 0; i < len(days); i++ {
		for passIdx, duration := range passDurations {
			startDayIdx, endDayIdx := i, i
			lastCoveredDay := days[i] + duration - 1

			// Find the furthest day covered by this pass
			for endDayIdx < len(days)-1 && days[endDayIdx+1] <= lastCoveredDay {
				endDayIdx++
			}

			// Update minimum cost to reach this day
			minCost[endDayIdx+1] = min(minCost[endDayIdx+1], minCost[startDayIdx]+costs[passIdx])
		}
	}

	// Return the minimum cost to cover all travel days
	return minCost[n]
}