/**
 * Problem: 3467. Transform Array by Parity
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func transformArray(nums []int) []int {
	// Iterate through each element in the array
	for i := 0; i < len(nums); i++ {
		// If number is even, replace with 0
		if nums[i]%2 == 0 {
			nums[i] = 0
		} else {
			// If number is odd, replace with 1
			nums[i] = 1
		}
	}

	// Sort the transformed array and return
	sort.Ints(nums)

	// Return the sorted transformed array
	return nums
}
