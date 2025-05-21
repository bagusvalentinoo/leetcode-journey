/**
 * Problem: 977. Squares of a Sorted Array
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sortedSquares(nums []int) []int {
	// Initialize pointers for left, right, and current position in result array
	left, right, resultIdx := 0, len(nums)-1, len(nums)-1
	
	// Create result array to store squared values
	result := make([]int, len(nums))

	// Process array from both ends toward middle
	for left <= right {
		// Calculate squares of values at left and right pointers
		leftSquare, rightSquare := nums[left]*nums[left], nums[right]*nums[right]

		// Place larger square in current position and move corresponding pointer
		if leftSquare > rightSquare {
			left++
			result[resultIdx] = leftSquare
		} else {
			right--
			result[resultIdx] = rightSquare
		}

		// Move to previous position in result array
		resultIdx--
	}

	return result
}