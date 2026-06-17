/**
 * Problem: 1460. Make Two Arrays Equal by Reversing Subarrays
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func canBeEqual(target []int, arr []int) bool {
	// Frequency array for numbers 0-1000
	targetFrequency := make([]int, 1001)

	// Count occurrences of each number in target array
	for _, num := range target {
		targetFrequency[num]++
	}

	// Verify each number in arr has matching frequency in target
	for _, num := range arr {
		// If number not found in target or frequency exhausted, arrays differ
		if targetFrequency[num] == 0 {
			return false
		}

		// Decrement frequency for this number
		targetFrequency[num]--
	}

	// All elements matched successfully
	return true
}
