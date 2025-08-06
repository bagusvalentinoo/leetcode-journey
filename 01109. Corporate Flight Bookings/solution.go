/**
 * Problem: 1109. Corporate Flight Bookings
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func corpFlightBookings(bookings [][]int, n int) []int {
	// Initialize result array with zeros for each flight (1 to n)
	flightSeats := make([]int, n)

	// Process each booking using difference array technique
	for _, booking := range bookings {
		firstFlight, lastFlight, seatsBooked := booking[0]-1, booking[1]-1, booking[2]

		flightSeats[firstFlight] += seatsBooked

		if lastFlight+1 < n {
			flightSeats[lastFlight+1] -= seatsBooked
		}
	}

	// Apply prefix sum to get actual seat counts for each flight
	for i := 1; i < n; i++ {
		flightSeats[i] += flightSeats[i-1]
	}

	return flightSeats
}
