/**
 * Problem: 1184. Distance Between Bus Stops
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func distanceBetweenBusStops(distance []int, start int, destination int) int {
	// totalDistance will store the sum of all distances between bus stops (the entire circle)
	totalDistance, partialDistance := 0, 0
	
	// Calculate the total distance around the circle by summing all elements in distance
	for _, d := range distance {
		totalDistance += d
	}

	// Traverse from start to destination, accumulating the distance for the direct path
	for start != destination {
		partialDistance += distance[start]
		// Move to the next bus stop, wrapping around if necessary
		start = (start + 1) % len(distance)
	}
	
	// Return the minimum of the direct path and the complementary path (the other way around the circle)
	return min(partialDistance, totalDistance-partialDistance)
}
