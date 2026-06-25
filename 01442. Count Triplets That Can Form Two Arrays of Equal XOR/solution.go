/**
 * Problem: 1442. Count Triplets That Can Form Two Arrays of Equal XOR
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countTriplets(arr []int) int {
	// Length of the input array
	arrayLength := len(arr)
	// Prefix XOR array where prefix[i] = XOR of arr[0..i-1]
	prefixXor := make([]int, arrayLength+1)

	// Build prefix XOR array
	for i := 0; i < arrayLength; i++ {
		prefixXor[i+1] = prefixXor[i] ^ arr[i]
	}

	// Counter for valid triplets
	tripletCount := 0

	// Iterate through possible i and k where i < k
	for i := 0; i < arrayLength; i++ {
		for k := i + 1; k < arrayLength; k++ {
			// If prefix XOR at i equals prefix XOR at k+1,
			// then XOR of subarray from i to k is 0
			// This means any j between i+1 and k forms a valid triplet
			if prefixXor[i] == prefixXor[k+1] {
				// Number of valid j positions = k - i
				tripletCount += k - i
			}
		}
	}

	// Return the total number of valid triplets found
	return tripletCount
}
