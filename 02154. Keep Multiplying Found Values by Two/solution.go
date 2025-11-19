/**
 * Problem: 2154. Keep Multiplying Found Values by Two
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findFinalValue(nums []int, original int) int {
	// Iterate through each element in the nums slice
	for _, v := range nums {
		// Check if the current element matches the original value
		if v == original {
			// Recursively call findFinalValue with original doubled
			return findFinalValue(nums, original*2)
		}
	}

	// Return the original value if no match is found
	return original
}
