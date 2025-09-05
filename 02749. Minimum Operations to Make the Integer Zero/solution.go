/**
 * Problem: 2749. Minimum Operations to Make the Integer Zero
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func makeTheIntegerZero(num1 int, num2 int) int {
	// Iterate t from 0 to 60, representing the number of operations
	for t := 0; t <= 60; t++ {
		// Calculate the remaining value after subtracting t * num2 from num1
		remaining := int64(num1) - int64(t)*int64(num2)

		// If remaining is negative, skip to next iteration
		if remaining < 0 { continue }
		// If remaining is less than t, it's impossible to represent with t positive integers
		if remaining < int64(t) { continue }

		// Count the number of set bits (ones) in the binary representation of remaining
		onesCount := bits.OnesCount64(uint64(remaining))

		// If the number of ones is less than or equal to t, return t as the answer
		if onesCount <= t { return t }
	}
	
	// If no valid t is found, return -1
	return -1
}
