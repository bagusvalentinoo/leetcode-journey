/**
 * Problem: 3852. Smallest Pair With Different Frequencies
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minDistinctFreqPair(nums []int) []int {
	// Frequency array for numbers 1-100 (index 0 unused)
	frequency := make([]int, 101)

	// Count occurrences of each number
	for _, num := range nums {
		frequency[num]++
	}

	// Track first number found with frequency
	firstNumber := -1

	// Iterate through all possible numbers
	for i := 0; i < len(frequency); i++ {
		// Check if number exists in array
		if frequency[i] > 0 {
			// If we already found a first number, compare frequencies
			if firstNumber != -1 {
				// If frequencies differ, return the pair
				if frequency[firstNumber] != frequency[i] {
					return []int{firstNumber, i}
				}
			} else {
				// Otherwise, set as first number
				firstNumber = i
			}
		}
	}

	// No valid pair found
	return []int{-1, -1}
}
