/**
 * Problem: 3512. Minimum Operations to Make Array Sum Divisible by K
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minOperations(nums []int, k int) int {
	// Initialize sum accumulator
	totalSum := 0

	// Calculate sum of all elements in the array
	for _, currentValue := range nums {
		totalSum += currentValue
	}

	// Return remainder of total sum divided by k
	return totalSum % k
}
