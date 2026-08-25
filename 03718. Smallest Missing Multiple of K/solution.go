/**
 * Problem: 3718. Smallest Missing Multiple of K
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func missingMultiple(nums []int, k int) int {
	// Create a set to store the numbers for O(1) lookup
	numSet := make(map[int]bool)

	// Populate the set with the numbers from the input array
	for _, num := range nums {
		numSet[num] = true
	}

	// Start with the first positive multiple of k
	target := k

	// Increment by k until finding a multiple not present in nums
	for numSet[target] {
		target += k
	}

	// Return the smallest missing multiple
	return target
}
