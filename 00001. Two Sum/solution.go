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
	// Use a map to store indices of numbers and find the complement to reach the target
	seen := make(map[int]int)
	
	for i, num := range nums {
		// Calculate the complement needed to reach the target
		complement := target - num

		// Check if the complement exists in the map
		if j, exists := seen[complement]; exists {
			// Return the indices if complement is found
			return []int{j, i}
		}

		// Store the current number and its index in the map
		seen[num] = i
	}

	// Return nil if no solution is found
	return nil
}