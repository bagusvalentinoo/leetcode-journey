/**
 * Problem: 1365. How Many Numbers Are Smaller Than the Current Number
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func smallerNumbersThanCurrent(nums []int) []int {
	// Frequency array for numbers 0-100
	frequency := make([]int, 101)

	// Result slice to store counts for each position
	result := make([]int, len(nums))

	// Count occurrences of each number
	for i := 0; i < len(nums); i++ {
		frequency[nums[i]]++
	}
	// Build prefix sum to get count of numbers <= current value
	for value := 1; value < 101; value++ {
		frequency[value] += frequency[value-1]
	}

	// For each element, count numbers strictly smaller than it
	for i := 0; i < len(nums); i++ {
		// Get current value at index i
		currentValue := nums[i]

		// If value is 0, no numbers are smaller
		if currentValue == 0 {
			result[i] = 0
		} else {
			// Otherwise, get count of numbers <= (currentValue - 1)
			result[i] = frequency[currentValue-1]
		}
	}

	// Return the result slice with counts of smaller numbers
	return result
}
