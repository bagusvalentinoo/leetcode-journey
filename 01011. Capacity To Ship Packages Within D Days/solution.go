/**
 * Problem: 1011. Capacity To Ship Packages Within D Days
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func shipWithinDays(weights []int, days int) int {
	// Initialize minCapacity to the weight of the heaviest package
	var minCapacity, totalWeight int

	// Find the maximum weight (which is the minimum capacity needed) and sum all weights
	for _, weight := range weights {
		if weight > minCapacity {
			minCapacity = weight
		}

		totalWeight += weight
	}

	// Simulate shipping with given capacity to check if we can complete within required days
	canShipWithinDays := func(capacity int) bool {
		// Start with 1 day and full capacity
		requiredDays, remainingCapacity := 1, capacity

		for _, weight := range weights {
			// If current package doesn't fit, start a new day
			if remainingCapacity < weight {
				requiredDays++
				remainingCapacity = capacity
			}

			// Load the current package
			remainingCapacity -= weight
		}

		// Return true if we can ship within the allowed days
		return requiredDays <= days
	}

	// Start with maximum possible capacity as the result
	result := totalWeight

	// Binary search to find minimum capacity
	for minCapacity <= totalWeight {
		// Calculate the middle capacity point for binary search
		midCapacity := minCapacity + (totalWeight-minCapacity)/2
		// Check if shipping is possible with this capacity
		possible := canShipWithinDays(midCapacity)

		// If possible, record this capacity and search for a smaller one
		if possible {
			result = midCapacity
			totalWeight = midCapacity - 1
		} else {
			// If not possible, search for a larger capacity
			minCapacity = midCapacity + 1
		}
	}

	return result
}