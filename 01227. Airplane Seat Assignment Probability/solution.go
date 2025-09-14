/**
 * Problem: 1227. Airplane Seat Assignment Probability
 *
 * Difficulty: Medium
 *
 * Language: JavaScript
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func nthPersonGetsNthSeat(n int) float64 {
	// If there is only one passenger, they will always get their own seat.
	if n == 1 {
		return 1.0
	}
	
	// For n > 1, the probability that the nth person gets their own seat is always 0.5.
	return 0.5
}
