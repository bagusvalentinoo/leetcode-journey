/**
 * Problem: 2441. Largest Positive Integer That Exists With Its Negative
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findMaxK(nums []int) int {
	// Create a presence table for positive numbers up to 1000
	positiveSeen := make([]bool, 1001)
	// Initialize maxK to -1 for the no valid pair case
	maxK := -1

	// Mark all positive numbers that appear in nums
	for _, num := range nums {
		// Record num as present when it is positive
		if num > 0 {
			positiveSeen[num] = true
		}
	}

	// Scan negative numbers to find the largest matching positive
	for _, num := range nums {
		// Update maxK when -num is present and larger than current maxK
		if num < 0 && positiveSeen[-num] && -num > maxK {
			maxK = -num
		}
	}

	// Return the largest k found or -1 when no valid pair exists
	return maxK
}
