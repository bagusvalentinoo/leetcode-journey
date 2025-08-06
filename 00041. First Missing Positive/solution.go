/**
 * Problem: 41. First Missing Positive
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func firstMissingPositive(nums []int) int {
	// Get the length of the input slice nums
	n := len(nums)

	// Place each number in its correct position if possible
	for i := 0; i < n; i++ {
		// Continue swapping until the current number is in the correct position,
		// or it is out of the valid range, or a duplicate is found
		for nums[i] > 0 && nums[i] <= n && nums[nums[i]-1] != nums[i] {
			// Calculate the correct index for nums[i]
			correctPos := nums[i] - 1
			// Swap nums[i] with the number at its correct position
			nums[i], nums[correctPos] = nums[correctPos], nums[i]
		}
	}

	// After rearrangement, find the first index where the value is not correct
	for i := 0; i < n; i++ {
		// If the value at index i is not i+1, return i+1 as the missing positive
		if nums[i] != i+1 {
			return i + 1
		}
	}

	// If all positions are correct, the missing positive is n+1
	return n + 1
}
