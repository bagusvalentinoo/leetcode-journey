/**
 * Problem: 1784. Check if Binary String Has at Most One Segment of Ones
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkOnesSegment(s string) bool {
	// If we find "01" pattern, it means there are multiple 1 segments
	// Returns true if no "01" pattern found
	return !strings.Contains(s, "01")
}
