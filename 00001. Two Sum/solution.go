/**
 * Problem: 1. Two Sum
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func twoSum(nums []int, target int) []int {
	// Map to store the values and their indices
	temp := make(map[int]int)

	// Iterate through the array
	for i, value := range nums {
		// If the current value is already in the map, return the indices
		if idx, exists := temp[value]; exists {
			return []int{idx, i}
		}

		// Calculate the pair value
		var pair int

		// Check if the current value is positive
		if value > 0 {
			pair = target - value
		} else {
			// If the current value is negative, add its absolute value to the target
			pair = target + int(math.Abs(float64(value)))
		}

		// Store the pair value and its index in the map
		temp[pair] = i
	}

	// Return empty slice if no solution found
	return []int{}
}
