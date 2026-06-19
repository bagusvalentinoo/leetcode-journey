/**
 * Problem: 1732. Find the Highest Altitude
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func largestAltitude(gain []int) int {
	// Initialize current altitude and maximum altitude
	currentAltitude, maxAltitude := 0, 0

	// Process each altitude change
	for _, change := range gain {
		// Update current altitude
		currentAltitude += change

		// Update maximum altitude if current is higher
		if currentAltitude > maxAltitude {
			maxAltitude = currentAltitude
		}
	}

	// Return the highest altitude reached during the journey
	return maxAltitude
}
