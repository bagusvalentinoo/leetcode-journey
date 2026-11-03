/**
 * Problem: 3736. Minimum Moves to Equal Array Elements III
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minMoves(nums []int) int {
	// Find the maximum value in the array
	maxVal := nums[0]

	// Iterate through the array to find the maximum value
	for _, num := range nums[1:] {
		if num > maxVal {
			maxVal = num
		}
	}

	// Accumulate total moves required to bring all elements to maxVal
	totalMoves := 0

	// Calculate difference from maximum element for each number
	for _, num := range nums {
		totalMoves += maxVal - num
	}

	// Return the minimum total number of moves
	return totalMoves
}
