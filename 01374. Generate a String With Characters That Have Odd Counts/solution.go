/**
 * Problem: 1374. Generate a String With Characters That Have Odd Counts
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func generateTheString(n int) string {
	// If n is odd, we can use all 'a's
	if n%2 == 1 {
		return strings.Repeat("a", n)
	}

	// If n is even, use (n-1) 'a's and one 'b'
	return strings.Repeat("a", n-1) + "b"
}
