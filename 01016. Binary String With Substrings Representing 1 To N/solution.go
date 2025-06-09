/**
 * Problem: 1016. Binary String With Substrings Representing 1 To N
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func queryString(s string, n int) bool {
	// Check each number from 1 to n
	for num := 1; num <= n; num++ {
		// Convert current number to binary representation
		binaryStr := fmt.Sprintf("%b", num)

		// Return false if binary representation is not found in string s
		if !strings.Contains(s, binaryStr) {
			return false
		}
	}

	// All binary representations were found in s
	return true
}
