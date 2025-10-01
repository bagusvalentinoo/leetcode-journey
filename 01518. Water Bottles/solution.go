/**
 * Problem: 1518. Water Bottles
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numWaterBottles(numBottles int, numExchange int) int {
	// Initialize the number of empty bottles with the starting number of bottles
	emptyBottles := numBottles

	// Continue exchanging bottles while enough empty bottles are available
	for emptyBottles >= numExchange {
		// Calculate how many new bottles can be exchanged from empty bottles
		exchangedBottles := emptyBottles / numExchange

		// Add the exchanged bottles to the total number of bottles consumed
		numBottles += exchangedBottles

		// Update the number of empty bottles after exchange and consumption
		emptyBottles = emptyBottles%numExchange + exchangedBottles
	}

	// Return the total number of bottles consumed
	return numBottles
}
