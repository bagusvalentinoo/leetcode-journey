/**
 * Problem: 796. Rotate String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func rotateString(s string, goal string) bool {
	// Return true if the lengths are equal and the goal is a substring of the doubled string
	return len(s) == len(goal) && strings.Contains(s+s, goal)
}
