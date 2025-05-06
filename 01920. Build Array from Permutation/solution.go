/**
 * Problem: 1920. Build Array from Permutation
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func buildArray(nums []int) []int {
	// Create a new slice with the same length as nums to store the result
	ans := make([]int, len(nums))
	
	// For each index, set ans[i] to the value at nums[nums[i]]
	for i := 0; i < len(nums); i++ {
		ans[i] = nums[nums[i]]
	}

	// Return the constructed array
	return ans
}