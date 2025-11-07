/**
 * Problem: 2528. Maximize the Minimum Powered City
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 16 ms (Beats 100%)
 */

// Precompute arrays for cumulative sums and differences
var SUM = make([]int, 100001)
var DIFF = make([]int, 100001)

// maxPower calculates the maximum minimum power for a city
func maxPower(stations []int, r, k int) int64 {
	// Initialize the minimum value and total power of stations
	minv, total := stations[0], 0
	
	// Iterate through stations to initialize SUM and find minv, total
	for i, v := range stations {
		SUM[i] = 0
		minv = min(minv, v)
		total += v
	}

	// Get the number of stations
	n := len(stations)
	SUM[n] = 0

	// Precompute the cumulative sum range for each station
	for i := range n {
		left := max(i-r, 0) // Calculate left boundary
		right := min(i+r+1, n) // Calculate right boundary

		SUM[left] += stations[i]
		SUM[right] -= stations[i]
	}

	// Define binary search range for the result
	lo, hi := minv, total+k
	res := 0

	// Perform binary search to find the maximum minimum power
	for lo <= hi {
		mid := lo + (hi-lo)/2 // Calculate the middle value

		// Check if the current mid value is feasible
		if check(n, mid, r, k) {
			res = mid // Update result
			lo = mid + 1 // Search in the higher range
		} else {
			hi = mid - 1 // Search in the lower range
		}
	}

	// Return the result as int64
	return int64(res)
}

// check verifies if the given power value is feasible
func check(n, val, r, k int) bool {
	// Copy the precomputed SUM array into DIFF for modification
	copy(DIFF[:n], SUM[:n])

	// Initialize the current sum and remaining power to add
	sum, remaining := 0, k

	// Iterate through each station to validate the power distribution
	for i := range DIFF[:n] {
		sum += DIFF[i] // Update the current sum

		// If the current sum is less than the required value
		if sum < val {
			add := val - sum // Calculate the additional power needed

			// If remaining power is insufficient, return false
			if remaining < add {
				return false
			}

			// Deduct the added power from remaining
			remaining -= add
			// Update the end boundary for the added power
			end := min(2*r+i+1, n)
			DIFF[end] -= add
			sum += add // Update the current sum
		}
	}

	// Return true if the power distribution is feasible
	return true
}
