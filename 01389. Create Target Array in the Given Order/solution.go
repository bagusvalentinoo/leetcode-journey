/**
 * Problem: 1389. Create Target Array in the Given Order
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func createTargetArray(nums []int, index []int) []int {
	// Initialize slice to store target array
	targetArray := make([]int, 0)

	// Iterate through each element and insert at specified index
	for i := 0; i < len(nums); i++ {
		// Insert at position index[i] using append
		targetArray = append(targetArray[:index[i]], append([]int{nums[i]}, targetArray[index[i]:]...)...)
	}

	// Return the final target array
	return targetArray
}
