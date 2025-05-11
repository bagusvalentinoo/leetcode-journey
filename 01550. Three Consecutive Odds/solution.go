/**
 * Problem: 1550. Three Consecutive Odds
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func threeConsecutiveOdds(arr []int) bool {
	// Track consecutive odd numbers found so far
	count := 0
	
	// Iterate through each number in the array
	for _, num := range arr {
		// If current number is odd
		if num % 2 != 0 {
			count++

			// Return true if we found 3 consecutive odd numbers
			if count == 3 {
				return true
			}
		} else {
			// Reset counter when we encounter an even number
			count = 0
		}
	}

	// Return false if we didn't find 3 consecutive odd numbers
	return false
}