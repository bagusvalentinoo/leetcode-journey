/**
 * Problem: 3307. Find the K-th Character in String Game II
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func kthCharacter(k int64, operations []int) byte {
	// Create bitmask from operations array, processing from right to left
	operationsMask := uint64(0)

	// Iterate through operations in reverse order to build the mask
	for i := len(operations) - 1; i >= 0; i-- {
		operationsMask = (operationsMask << 1) | uint64(operations[i])
	}
	
	// Calculate character by counting set bits in masked position
	return byte('a' + bits.OnesCount64((uint64(k)-1)&operationsMask)%26)
}
