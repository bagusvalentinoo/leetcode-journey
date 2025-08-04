/**
 * Problem: 904. Fruit Into Baskets
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 99.82%)
 */

func totalFruit(fruits []int) int {
	// Initialize variables to track the last and second last fruit types.
	lastFruitType, secondLastFruitType := -1, -1
	// lastFruitCount keeps count of consecutive last fruit type.
	lastFruitCount := 0
	// currentWindow stores the current window size of valid fruits.
	currentWindow := 0
	// maxFruits stores the maximum number of fruits collected.
	maxFruits := 0

	// Iterate through each fruit in the input slice.
	for _, fruit := range fruits {
		// If the current fruit matches either of the last two types, extend the window.
		if fruit == lastFruitType || fruit == secondLastFruitType {
			currentWindow++
		} else {
			// Otherwise, reset the window to the count of last consecutive fruit plus current fruit.
			currentWindow = lastFruitCount + 1
		}

		// If the current fruit matches the last fruit type, increment its count.
		if fruit == lastFruitType {
			lastFruitCount++
		} else {
			// Otherwise, reset lastFruitCount and update fruit types.
			lastFruitCount = 1
			secondLastFruitType = lastFruitType
			lastFruitType = fruit
		}

		// Update the maximum fruits collected if current window is larger.
		if currentWindow > maxFruits {
			maxFruits = currentWindow
		}
	}

	// Return the maximum number of fruits that can be collected.
	return maxFruits
}
