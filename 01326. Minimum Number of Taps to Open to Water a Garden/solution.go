/**
 * Problem: 1326. Minimum Number of Taps to Open to Water a Garden
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minTaps(n int, ranges []int) int {
	// Array to store farthest reach from each starting point
	reachFromStart := make([]int, n+1)

	// Build reach array: for each tap, update farthest reach from its leftmost coverage
	for i := 0; i <= n; i++ {
		// Calculate left and right coverage boundaries for current tap
		left, right := max(0, i-ranges[i]), min(n, i+ranges[i])

		// Store the maximum right coverage starting from left position
		if right > reachFromStart[left] {
			reachFromStart[left] = right
		}
	}

	// Greedy interval covering variables
	tapsCount, currentEnd, farthestReach := 0, 0, 0

	// Iterate through each position from 0 to n
	for i := 0; i <= n; i++ {
		// If current position exceeds farthest reach, impossible
		if i > farthestReach {
			return -1
		}

		// Update farthest reach from current position
		if reachFromStart[i] > farthestReach {
			farthestReach = reachFromStart[i]
		}

		// When we reach the end of current coverage segment
		if i == currentEnd {
			// If not at the end of garden yet
			if i != n {
				// Select a new tap and extend coverage
				tapsCount++
				currentEnd = farthestReach
			}
		}
	}

	// Return the minimum number of taps needed
	return tapsCount
}
