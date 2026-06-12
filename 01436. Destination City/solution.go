/**
 * Problem: 1436. Destination City
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func destCity(paths [][]string) string {
	// Set to store all starting cities
	startingCities := make(map[string]bool)

	// Add all starting cities to the set
	for _, path := range paths {
		startingCities[path[0]] = true
	}

	// Check each destination to find one that is not a starting city
	for _, path := range paths {
		// Get destination city from current path
		destination := path[1]

		// If destination is not in starting cities, it's the answer
		if !startingCities[destination] {
			return destination
		}
	}

	// Return empty string if no destination found
	return ""
}
