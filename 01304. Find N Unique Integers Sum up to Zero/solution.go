/**
 * Problem: 1304. Find N Unique Integers Sum up to Zero
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sumZero(n int) []int {
	// Initialize a slice to hold the result, with length n
	arr := make([]int, n)
	// Start with the smallest positive integer
	k := 1

	// Loop to fill the array with pairs of positive and negative integers
	for i := 0; i < n/2; i++ {
		// Assign positive integer to the ith position
		arr[i] = k
		// Assign corresponding negative integer to the mirrored position from the end
		arr[n-1-i] = -k
		// Increment k for the next pair
		k++
	}

	// If n is odd, the middle element remains zero by default
	return arr
}
