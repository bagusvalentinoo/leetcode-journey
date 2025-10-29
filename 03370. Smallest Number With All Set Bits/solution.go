/**
 * Problem: 3370. Smallest Number With All Set Bits
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func smallestNumber(n int) int {
	// Initialize variable `k` to represent the number of bits
	k := 1

	// Start an infinite loop to find the smallest number
	for {
		// Calculate the value with all `k` bits set to 1
		val := (1 << k) - 1

		// Check if the calculated value is greater than or equal to `n`
		if val >= n {
			// Return the value if the condition is met
			return val
		}
		
		// Increment `k` to check the next number of bits
		k++
	}
}
