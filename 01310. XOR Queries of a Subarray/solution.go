/**
 * Problem: 1310. XOR Queries of a Subarray
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func xorQueries(arr []int, queries [][]int) []int {
	// Get array length
	arrayLength := len(arr)

	// Build prefix XOR array with extra element at start
	prefixXors := make([]int, arrayLength+1)

	// Compute prefix XOR where prefixXors[i] = XOR of arr[0..i-1]
	for i := 0; i < arrayLength; i++ {
		prefixXors[i+1] = prefixXors[i] ^ arr[i]
	}

	// Process each query
	results := make([]int, len(queries))

	// Process each query
	for i, query := range queries {
		// Get left and right from query
		left, right := query[0], query[1]

		// XOR from left to right = prefix[right+1] ^ prefix[left]
		results[i] = prefixXors[right+1] ^ prefixXors[left]
	}

	// Return results
	return results
}
