/**
 * Problem: 1094. Car Pooling
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func carPooling(trips [][]int, capacity int) bool {
	// Initialize an array to track the net change in passengers at each location.
	// The size is 1001 because locations range from 0 to 1000.
	passengerChange := make([]int, 1001)

	// Iterate over each trip to record the pickup and drop-off changes.
	for i := 0; i < len(trips); i++ {
		// Add passengers at the start location.
		passengerChange[trips[i][1]] += trips[i][0]
		// Remove passengers at the end location.
		passengerChange[trips[i][2]] -= trips[i][0]
	}

	// Initialize the available seats with the given capacity.
	availableSeats := capacity

	// Traverse all possible locations to simulate the car's journey.
	for i := 0; i < len(passengerChange); i++ {
		// Update available seats based on passenger changes at the current location.
		availableSeats -= passengerChange[i]

		// If available seats go below zero, capacity is exceeded.
		if availableSeats < 0 {
			return false
		}
	}

	// If the journey completes without exceeding capacity, return true.
	return true
}
