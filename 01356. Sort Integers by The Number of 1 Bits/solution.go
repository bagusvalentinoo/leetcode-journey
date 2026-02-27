/**
 * Problem: 1356. Sort Integers by The Number of 1 Bits
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sortByBits(arr []int) []int {
	// Sort using custom comparator
	sort.Slice(arr, func(i, j int) bool {
		// Count set bits for both numbers using built-in OnesCount
		bitsA, bitsB := bits.OnesCount(uint(arr[i])), bits.OnesCount(uint(arr[j]))

		// If bit counts are equal, sort by numeric value
		if bitsA == bitsB {
			return arr[i] < arr[j]
		}

		// Otherwise sort by number of bits
		return bitsA < bitsB
	})

	// Return sorted array
	return arr
}
