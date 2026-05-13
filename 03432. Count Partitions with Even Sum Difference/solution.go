/**
 * Problem: 3432. Count Partitions with Even Sum Difference
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countPartitions(nums []int) int {
	// Get the length of the input array
	arrayLength := len(nums)

	// Initialize total sum
	totalSum := 0

	// Calculate total sum of all elements in the array
	for _, num := range nums {
		totalSum += num
	}

	// If total sum is odd, no partition can have equal sums
	if totalSum%2 != 0 {
		return 0
	}

	// Return number of possible split positions (n-1)
	return arrayLength - 1
}
