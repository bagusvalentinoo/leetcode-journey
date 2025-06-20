/**
 * Problem: 3443. Maximum Manhattan Distance After K Changes
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 17 ms (Beats 100%)
 */

func maxDistance(s string, k int) int {
	// Initialize result to track maximum distance
	result := 0

	// Track current position and iterate through each move
	for x, y, index := 0, 0, 0; index < len(s); index++ {
		// Update position based on direction
		if s[index] == 'N' {
			x++
		} else if s[index] == 'S' {
			x--
		} else if s[index] == 'W' {
			y++
		} else {
			y--
		}

		// Calculate absolute coordinates
		absX, absY := x, y

		// Convert negative coordinates to positive
		if x < 0 {
			absX = -x
		}
		if y < 0 {
			absY = -y
		}

		// Update maximum distance considering k changes in both directions
		result = max(result, min(absX+absY+k+k, index+1))
	}

	return result
}
