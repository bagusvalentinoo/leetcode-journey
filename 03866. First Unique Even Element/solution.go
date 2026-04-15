/**
 * Problem: 3866. First Unique Even Element
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func firstUniqueEven(nums []int) int {
	// Create frequency array for numbers 1-100 (index 0 for 1, index 99 for 100)
	frequency := make([]int, 100)

	// Count occurrences of each number
	for i := 0; i < len(nums); i++ {
		frequency[nums[i]-1]++
	}

	// Iterate through original array to find first unique even number
	for i := 0; i < len(nums); i++ {
		// Check if number is even and appears exactly once
		if nums[i]%2 == 0 && frequency[nums[i]-1] == 1 {
			return nums[i]
		}
	}

	// No unique even number found
	return -1
}
