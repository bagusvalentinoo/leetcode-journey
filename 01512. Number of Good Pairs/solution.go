/**
 * Problem: 1512. Number of Good Pairs
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numIdenticalPairs(nums []int) int {
	// Map to store frequency of each number
	frequencyMap := make(map[int]int)

	// Counter for identical pairs
	pairsCount := 0

	// Iterate through each element in the array
	for _, currentNumber := range nums {
		// Get current frequency of this number (default to 0)
		currentFrequency := frequencyMap[currentNumber]

		// Add current frequency to pair count (pairs with previous occurrences)
		pairsCount += currentFrequency
		// Update frequency map with incremented count
		frequencyMap[currentNumber] = currentFrequency + 1
	}

	// Return the total number of identical pairs found in the array
	return pairsCount
}
