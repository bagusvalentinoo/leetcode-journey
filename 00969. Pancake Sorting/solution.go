/**
 * Problem: 969. Pancake Sorting
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func pancakeSort(arr []int) []int {
	n := len(arr)
	result := make([]int, 0, 2*n) // Pre-allocate space for worst case

	// Create a value-to-index map for O(1) lookups
	valueToIndex := make(map[int]int, n)
	for i, v := range arr {
		valueToIndex[v] = i
	}

	// Sort from largest to smallest element
	for target := n; target > 0; target-- {
		index := valueToIndex[target]

		// Skip if already in correct position
		if index == target-1 {
			continue
		}

		// If not at beginning, flip to position 0
		if index != 0 {
			flip(arr, index+1)
			result = append(result, index+1)
			// Update indices after flip
			updateIndices(valueToIndex, arr, index+1)
		}

		// Flip to move to final position
		flip(arr, target)
		result = append(result, target)
		updateIndices(valueToIndex, arr, target)
	}

	return result
}

func flip(arr []int, k int) {
	for i := 0; i < k/2; i++ {
		arr[i], arr[k-1-i] = arr[k-1-i], arr[i]
	}
}

func updateIndices(m map[int]int, arr []int, k int) {
	for i := 0; i < k; i++ {
		m[arr[i]] = i
	}
}