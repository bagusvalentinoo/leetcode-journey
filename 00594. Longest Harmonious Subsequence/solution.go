/**
 * Problem: 594. Longest Harmonious Subsequence
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

func findLHS(nums []int) int {
	// Sort the array to group same and adjacent values together
	sort.Ints(nums)
	// Initialize maximum length and left pointer for sliding window
	maxLength, left := 0, 0

	// Use sliding window to find longest harmonious subsequence
	for right := 0; right < len(nums); right++ {
		// Check if current window forms a harmonious subsequence (difference = 1)
		if nums[right] - nums[left] == 1 {
			maxLength = max(maxLength, (right-left+1))
		}

		// Shrink window from left if difference exceeds 1
		for nums[right] - nums[left] > 1 {
			left++
		}
	}

	return maxLength
}

func max(x, y int) int {
	// Return x if it's greater than y
	if x > y {
		return x
	}

	// Return y if x is less than or equal to y
	return y
}
