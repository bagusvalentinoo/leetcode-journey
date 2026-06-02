/**
 * Problem: 3633. Earliest Finish Time for Land and Water Rides I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func solve(firstStartTimes []int, firstDurations []int,
	secondStartTimes []int, secondDurations []int) int {
	// Find the earliest possible finish time for the first operation
	firstFinishTime := math.MaxInt32

	// Iterate through all options for the first operation
	for i := 0; i < len(firstStartTimes); i++ {
		// Calculate finish time for current first operation option
		candidate := firstStartTimes[i] + firstDurations[i]

		// Update minimum if current candidate is smaller
		if candidate < firstFinishTime {
			firstFinishTime = candidate
		}
	}

	// Calculate the earliest finish time for the second operation
	totalFinishTime := math.MaxInt32

	// The second operation can start at its earliest start time or after the first finishes
	for i := 0; i < len(secondStartTimes); i++ {
		// Get the earliest possible start time for second operation
		startTime := secondStartTimes[i]

		// Second operation must wait for first operation to finish if it starts earlier
		if startTime < firstFinishTime {
			startTime = firstFinishTime
		}

		// Calculate finish time for current second operation option
		candidate := startTime + secondDurations[i]

		// Update minimum if current candidate is smaller
		if candidate < totalFinishTime {
			totalFinishTime = candidate
		}
	}

	// Return the minimum total completion time
	return totalFinishTime
}

func earliestFinishTime(landStartTime []int, landDuration []int,
	waterStartTime []int, waterDuration []int) int {
	// Calculate minimum time for land-first sequence
	landFirstTime := solve(landStartTime, landDuration, waterStartTime, waterDuration)

	// Calculate minimum time for water-first sequence
	waterFirstTime := solve(waterStartTime, waterDuration, landStartTime, landDuration)

	// If land-first sequence is faster, return its finish time
	if landFirstTime < waterFirstTime {
		return landFirstTime
	}

	// Otherwise, return the finish time for water-first sequence
	return waterFirstTime
}
