/**
 * Problem: 1545. Find Kth Bit in Nth Binary String
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findKthBit(n int, k int) byte {
	// Base case: S(1) is "0"
	if n == 1 {
		return '0'
	}

	// Length of S(n) = 2^n - 1
	length := (1 << n) - 1

	// Middle position (1-indexed)
	mid := (length + 1) / 2

	// If k is exactly the middle, it's always '1'
	if k == mid {
		return '1'
	}
	// If k is in the first half, look in S(n-1) at same position
	if k < mid {
		return findKthBit(n-1, k)
	}

	// If k is in the second half:
	// 1. Find corresponding position in reversed inverted part
	// 2. Get that bit from S(n-1)
	invertedBit := findKthBit(n-1, length-k+1)

	// 3. Invert the bit (0->1, 1->0)
	if invertedBit == '0' {
		return '1'
	}

	// If invertedBit is '1', return '0'
	return '0'
}
