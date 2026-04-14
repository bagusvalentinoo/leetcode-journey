/**
 * Problem: 3870. Count Commas in Range
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countCommas(n int) int {
	// If n is less than 1000, no commas are needed
	if n-999 < 0 {
		return 0
	}

	// Otherwise, number of commas equals n minus 999
	return n - 999
}
