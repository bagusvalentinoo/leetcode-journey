/**
 * Problem: 2419. Longest Subarray With Maximum Bitwise AND
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

func longestSubarray(nums []int) int {
	maxAnd := 0
	maxLength := 0
	currentLength := 0

	for _, num := range nums {
		// Calculate the maximum bitwise AND
		maxAnd = max(maxAnd, num)
	}

	for _, num := range nums {
		if num == maxAnd {
			currentLength++
			maxLength = max(maxLength, currentLength)
		} else {
			currentLength = 0
		}
	}

	return maxLength
}
