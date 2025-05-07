/**
 * Problem: 954. Array of Doubled Pairs
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

import (
	"sort"
)

func canReorderDoubled(arr []int) bool {
	// Count frequency of each number in the array
	freq := make(map[int]int)

	for _, num := range arr {
		freq[num]++
	}

	// Extract keys from frequency map
	keys := make([]int, 0, len(freq))
	for k := range freq {
		keys = append(keys, k)
	}

	// Sort keys by absolute value, with special handling for negative numbers
	sort.Slice(keys, func(i, j int) bool {
		if keys[i] < 0 && keys[j] < 0 {
			if -keys[i] == -keys[j] {
				return keys[i] < keys[j]
			}
			return -keys[i] < -keys[j]
		} else if keys[i] < 0 || keys[j] < 0 {
			return abs(keys[i]) < abs(keys[j])
		}

		return keys[i] < keys[j]
	})

	// Check if each number can be paired with its double
	for _, x := range keys {
		if freq[x] > freq[2*x] {
			return false
		}

		freq[2*x] -= freq[x]
	}

	return true
}

// Helper function to calculate absolute value
// This is necessary because we want to sort by absolute value
func abs(a int) int {
	if a < 0 {
		return -a
	}

	return a
}