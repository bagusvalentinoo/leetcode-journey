/**
 * Problem: 2106. Maximum Fruits Harvested After at Most K Steps
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxTotalFruits(fruits [][]int, startPos int, maxSteps int) int {
	// Initialize window pointers, current sum of fruits, and answer.
	windowStart, windowEnd, currentSum, maxFruits := 0, 0, 0, 0
	totalFruits := len(fruits)

	// step calculates the minimum steps needed to collect fruits from windowStart to windowEnd.
	step := func(windowStart int, windowEnd int) int {
		// Case 1: All fruits are to the left of startPos.
		if fruits[windowEnd][0] <= startPos {
			return startPos - fruits[windowStart][0]
		// Case 2: All fruits are to the right of startPos.
		} else if fruits[windowStart][0] >= startPos {
			return fruits[windowEnd][0] - startPos
		// Case 3: Fruits are on both sides of startPos.
		} else {
			return min(
				abs(startPos-fruits[windowEnd][0]),
				abs(startPos-fruits[windowStart][0]),
			) + fruits[windowEnd][0] - fruits[windowStart][0]
		}
	}

	// Expand the window to the right.
	for windowEnd < totalFruits {
		// Add the fruits at windowEnd to currentSum.
		currentSum += fruits[windowEnd][1]
		
		// Shrink the window from the left if steps exceed maxSteps.
		for windowStart <= windowEnd && step(windowStart, windowEnd) > maxSteps {
			currentSum -= fruits[windowStart][1]
			windowStart++
		}

		// Update the maximum fruits harvested.
		maxFruits = max(maxFruits, currentSum)
		windowEnd++
	}
	
	return maxFruits
}

func abs(x int) int {
	if x < 0 {
		return -x
	}

	return x
}
