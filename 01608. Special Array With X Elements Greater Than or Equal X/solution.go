/**
 * Problem: 1608. Special Array With X Elements Greater Than or Equal X
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func specialArray(nums []int) int {
	// Cache array length as upper bound for candidate x
	arrayLength := len(nums)

	// Try every candidate x from 1 to n
	for candidate := 1; candidate <= arrayLength; candidate++ {
		// Count numbers greater than or equal to candidate
		count := 0

		// Scan array and count qualifying elements
		for _, currentNumber := range nums {
			// Increment count when element meets threshold
			if currentNumber >= candidate {
				count++
			}
		}

		// Return candidate when count matches exactly
		if count == candidate {
			return candidate
		}
	}

	// No candidate matched so array is not special
	return -1
}
