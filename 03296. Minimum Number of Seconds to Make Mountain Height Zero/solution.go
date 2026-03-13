/**
 * Problem: 3296. Minimum Number of Seconds to Make Mountain Height Zero
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minNumberOfSeconds(mountainHeight int, workerTimes []int) int64 {
	// Helper function to check if given time is sufficient
	check := func(targetSeconds int64) bool {
		// Initialize total height cleared
		var totalHeight int64 = 0

		// Calculate how much each worker can clear in targetSeconds
		for _, workerTime := range workerTimes {
			// Calculate discriminant for quadratic formula
			discriminant := float64(8*targetSeconds)/float64(workerTime) + 1.0

			// Calculate k using quadratic formula
			k := int64((math.Sqrt(discriminant) - 1) / 2)

			// Add k to total height
			totalHeight += k

			// Early exit if we've already reached mountain height
			if totalHeight >= int64(mountainHeight) {
				return true
			}
		}

		// Return true if total height meets or exceeds mountain height
		return totalHeight >= int64(mountainHeight)
	}

	// Binary search bounds
	// Lower bound: 1 second
	low := int64(1)

	// Upper bound: if fastest worker does all work alone
	// Formula: time = workerTime * mountainHeight * (mountainHeight + 1) / 2
	fastestWorker := workerTimes[0]
	high := int64(mountainHeight*(1+mountainHeight)/2) * int64(fastestWorker)

	// Result variable
	var minimumTime int64 = 0

	// Binary search for minimum valid time
	for low <= high {
		// Calculate middle point to avoid overflow
		mid := low + (high-low)/2

		// If valid, try to find smaller time
		if check(mid) {
			minimumTime = mid
			high = mid - 1
		} else {
			// If not valid, increase lower bound
			low = mid + 1
		}
	}

	// Return minimum valid time found
	return minimumTime
}
