/**
 * Problem: 2078. Two Furthest Houses With Different Colors
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxDistance(colors []int) int {
	// Get length of colors array
	length := len(colors)

	// Check from start to find first color that differs from end or start
	for i := 0; i < length; i++ {
		// If current color differs from last color or first color
		if (colors[i]^colors[length-1])|(colors[length-1-i]^colors[0]) != 0 {
			// Return the maximum distance
			return length - 1 - i
		}
	}

	// Fallback return (should not reach here)
	return 0
}
