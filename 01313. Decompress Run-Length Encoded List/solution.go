/**
 * Problem: 1313. Decompress Run-Length Encoded List
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func decompressRLElist(nums []int) []int {
	// Initialize result slice to store decompressed values
	result := make([]int, 0)

	// Iterate through each frequency-value pair (step by 2)
	for i := 0; i <= len(nums)-1; i += 2 {
		// Repeat value (nums[i + 1]) frequency times (nums[i])
		for j := 0; j <= nums[i]-1; j++ {
			// Append current value to result slice
			result = append(result, nums[i+1])
		}
	}

	// Return fully decompressed list
	return result
}
