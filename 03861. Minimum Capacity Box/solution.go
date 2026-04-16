/**
 * Problem: 3861. Minimum Capacity Box
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minimumIndex(capacity []int, itemSize int) int {
	// Initialize smallest valid capacity to maximum integer value
	smallestValidCapacity := int(^uint(0) >> 1)

	// Find the smallest capacity that meets or exceeds itemSize
	for _, x := range capacity {
		// Check if current capacity is large enough and smaller than current minimum
		if x >= itemSize && x < smallestValidCapacity {
			smallestValidCapacity = x
		}
	}

	// Initialize result index to -1 (not found)
	resultIndex := -1

	// Find the index of the smallest valid capacity
	for i, x := range capacity {
		// Check if current element matches the smallest valid capacity
		if x == smallestValidCapacity {
			// Store the index
			resultIndex = i

			// Exit loop once found (first occurrence)
			break
		}
	}

	// Return the index (or -1 if no valid capacity found)
	return resultIndex
}
