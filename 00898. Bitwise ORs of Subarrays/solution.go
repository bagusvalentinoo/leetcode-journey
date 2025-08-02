/**
 * Problem: 898. Bitwise ORs of Subarrays
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 75 ms (Beats 100%)
 */

// m is a map to store unique bitwise OR results of subarrays.
// The key is the OR result, and the value is a boolean (used only for existence check).
var m = make(map[int32]bool, 1e5)

func subarrayBitwiseORs(arr []int) int {
	// cur holds the OR results of subarrays ending at the previous element.
	// next will hold the OR results for subarrays ending at the current element.
	cur, next := make([]int32, 0, 32), make([]int32, 0, 32)

	// Iterate through each element in arr.
	for _, a := range arr {
		a := int32(a) // Convert to int32 for consistency with map key type.
		next = append(next, a) // Start new subarray with current element.

		// For each OR result in cur, compute OR with current element.
		for _, c := range cur {
			// Only add if the result is different from the last added value to avoid duplicates.
			if next[len(next)-1] != c|a { next = append(next, c|a) }
		}

		// Add all OR results in next to the map to ensure uniqueness.
		for _, n := range next { m[n] = true }

		// Prepare cur and next for the next iteration.
		cur, next = next, cur[:0]
	}
	
	// The answer is the number of unique OR results stored in the map.
	ans := len(m)

	// Clear the map for potential reuse.
	for k := range m { delete(m, k) }

	return ans
}
