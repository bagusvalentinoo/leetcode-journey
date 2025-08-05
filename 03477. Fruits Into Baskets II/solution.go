/**
 * Problem: 3477. Fruits Into Baskets II
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numOfUnplacedFruits(fruits []int, baskets []int) int {
	// Get the number of fruits
	n := len(fruits)
	// Track the number of fruits that have been placed in baskets
	alloted := 0

	// Iterate over each fruit
	for i := 0; i < n; i++ {
		// Try to place the current fruit in any basket
		for j := 0; j < n; j++ {
			// If the basket can hold the fruit
			if fruits[i] <= baskets[j] {
				// Mark the basket as used by setting it to -1
				baskets[j] = -1
				// Increment the count of placed fruits
				alloted++
				// Move to the next fruit after placing
				break
			}
		}
	}

	// Return the number of fruits that could not be placed in any basket
	return n - alloted
}
