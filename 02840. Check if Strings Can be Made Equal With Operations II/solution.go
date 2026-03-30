/**
 * Problem: 2840. Check if Strings Can be Made Equal With Operations II
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkStrings(s1 string, s2 string) bool {
	// Track XOR and sum differences for even and odd indices
	evenXor, oddXor, evenSumDiff, oddSumDiff := 0, 0, 0, 0

	// Iterate through each character in the strings
	for i := 0; i < len(s1); i++ {
		// Get character codes for both strings at current index
		charCode1, charCode2 := int(s1[i]), int(s2[i])

		// Calculate XOR difference and squared difference
		xorDiff := charCode1 ^ charCode2
		squareDiff := charCode1*charCode1 - charCode2*charCode2

		// Check if current index is odd
		if i&1 == 1 {
			// Update XOR for odd indices
			oddXor ^= xorDiff
			// Update sum of squares for odd indices
			oddSumDiff += squareDiff
		} else {
			// Current index is even
			// Update XOR for even indices
			evenXor ^= xorDiff
			// Update sum of squares for even indices
			evenSumDiff += squareDiff
		}
	}

	// Return true only if all differences are zero
	return (evenXor | oddXor | evenSumDiff | oddSumDiff) == 0
}
