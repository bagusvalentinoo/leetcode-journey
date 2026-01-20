/**
 * Problem: 3314. Construct the Minimum Bitwise Array I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minBitwiseArray(nums []int) []int {
	// Initialize result array
	result := make([]int, len(nums))

	// Process each number: if number is 2 return -1, else apply bitwise transformation
	for i := 0; i < len(nums); i++ {
		currentNum := nums[i]

		// (n + 1) & (-n - 1) isolates rightmost zero bit pattern, divide by 2 to get subtract value
		if currentNum != 2 {
			result[i] = currentNum - ((currentNum+1)&(-currentNum-1))/2
		} else {
			result[i] = -1
		}
	}

	// Return transformed array
	return result
}
