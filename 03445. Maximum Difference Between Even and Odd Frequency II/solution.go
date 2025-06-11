/**
 * Problem: 3445. Maximum Difference Between Even and Odd Frequency II
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 38 ms (Beats 100%)
 */

func maxDifference(s string, k int) int {
	// Get string length
	n := len(s)
	// Initialize maximum difference to minimum possible value
	maxDiff := math.MinInt32

	// Try all combinations of two different characters
	for _, charA := range []byte{'0', '1', '2', '3', '4'} {
		for _, charB := range []byte{'0', '1', '2', '3', '4'} {
			if charA == charB {
				continue
			}

			// Track best differences for each status combination
			bestDiff := make([]int, 4)

			for i := range bestDiff {
				bestDiff[i] = math.MaxInt32
			}
			
			// Count occurrences of charA and charB
			countA, countB := 0, 0
			// Track previous counts when moving left pointer
			prevCountA, prevCountB := 0, 0
			// Left boundary of sliding window
			leftPtr := -1

			// Expand right boundary of sliding window
			for rightPtr := 0; rightPtr < n; rightPtr++ {
				if s[rightPtr] == charA {
					countA++
				}
				if s[rightPtr] == charB {
					countB++
				}

				// Shrink window from left when conditions are met
				for rightPtr-leftPtr >= k && countB-prevCountB >= 2 {
					leftStatus := getStatus(prevCountA, prevCountB)

					if prevCountA-prevCountB < bestDiff[leftStatus] {
						bestDiff[leftStatus] = prevCountA - prevCountB
					}

					leftPtr++

					if s[leftPtr] == charA {
						prevCountA++
					}
					if s[leftPtr] == charB {
						prevCountB++
					}
				}

				// Calculate status for current right position
				rightStatus := getStatus(countA, countB)

				// Update maximum difference if valid combination exists
				if bestDiff[rightStatus^0b10] != math.MaxInt32 {
					current := (countA - countB) - bestDiff[rightStatus^0b10]

					if current > maxDiff {
						maxDiff = current
					}
				}
			}
		}
	}
	
	return maxDiff
}

func getStatus(countA, countB int) int {
	return ((countA & 1) << 1) | (countB & 1)
}
