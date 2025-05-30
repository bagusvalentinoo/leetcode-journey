/**
 * Problem: 29. Divide Two Integers
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func divide(dividend int, divisor int) int {
	// Calculate the quotient, truncating any decimal part
	quotient := dividend / divisor

	// Check if quotient is below the 32-bit integer minimum value
	if quotient < math.MinInt32 {
		return math.MinInt32
	}
	// Check if quotient exceeds the 32-bit integer maximum value
	if quotient > math.MaxInt32 {
		return math.MaxInt32
	}

	// Return the bounded quotient
	return quotient
}