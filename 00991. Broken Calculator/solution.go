/**
 * Problem: 991. Broken Calculator
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func brokenCalc(startValue int, target int) int {
	// Initialize operations counter
	operations := 0

	// Work backwards from target to startValue
	for target > startValue {
		// If target is even, divide by 2 (reverse of multiplication)
		if target%2 == 0 {
			target /= 2
		} else {
			// If target is odd, add 1 (reverse of subtraction)
			target += 1
		}

		// Count each operation
		operations += 1
	}
	
	// Add any remaining operations to reach startValue
	return operations + (startValue - target)
}