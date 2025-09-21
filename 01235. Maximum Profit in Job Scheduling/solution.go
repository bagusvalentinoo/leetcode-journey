/**
 * Problem: 1235. Maximum Profit in Job Scheduling
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 9 ms (Beats 100%)
 */

func jobScheduling(startTime []int, endTime []int, profit []int) int {
	// Create a slice to store the original indices of jobs
	jobIndices := make([]int, len(startTime))

	// Initialize jobIndices with 0, 1, ..., n-1
	for i := range jobIndices {
		jobIndices[i] = i
	}

	// Sort jobIndices by startTime, then by endTime for tie-breaking
	sort.Slice(jobIndices, func(i, j int) bool {
		return startTime[jobIndices[i]] < startTime[jobIndices[j]] ||
			(startTime[jobIndices[i]] == startTime[jobIndices[j]] &&
				endTime[jobIndices[i]] < endTime[jobIndices[j]])
	})

	// tracking keeps pairs of [maxProfit, startTime] in decreasing order of startTime
	tracking := [][2]int{}

	// Iterate jobs in reverse order (latest startTime first)
	for i := len(jobIndices) - 1; i >= 0; i-- {
		idx := jobIndices[i] // Get the job index

		// If tracking is empty, add the first job's profit and startTime
		if len(tracking) == 0 {
			tracking = append(tracking, [2]int{profit[idx], startTime[idx]})
			continue
		}

		// Initialize current profit with this job's profit
		currentProfit := profit[idx]

		// If the earliest job in tracking starts after or at this job's endTime
		if tracking[0][1] >= endTime[idx] {
			// Binary search for the first job in tracking with startTime >= endTime[idx]
			last, _ := sort.Find(len(tracking), func(j int) int {
				return tracking[j][1] - endTime[idx]
			})

			// Adjust last if not found or overshot
			if last == len(tracking) || tracking[last][1] < endTime[idx] {
				last--
			}

			// Add the profit from the compatible job
			currentProfit += tracking[last][0]
		}

		// If including this job increases the max profit, update tracking
		if currentProfit > tracking[len(tracking)-1][0] {
			// If the last job in tracking has the same startTime, update its profit
			if tracking[len(tracking)-1][1] == startTime[idx] {
				tracking[len(tracking)-1][0] = currentProfit
			} else {
				// Otherwise, append the new profit and startTime
				tracking = append(tracking, [2]int{currentProfit, startTime[idx]})
			}
		}
	}

	// Return the maximum profit found (last element in tracking)
	return tracking[len(tracking)-1][0]
}
