/**
 * Problem: 869. Reordered Power of 2
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func reorderedPowerOf2(n int) bool {
	// countDigits returns an array representing the count of each digit (0-9) in the integer x.
	countDigits := func(x int) [10]int {
		// Initialize an array to store digit counts.
		var count [10]int

		// Loop through each digit of x.
		for x > 0 {
			// Increment the count for the current digit.
			count[x%10]++

			// Remove the last digit from x.
			x /= 10
		}

		return count // Return the digit count array.
	}

	// Get the digit count array for the input number n.
	targetDigitCount := countDigits(n)

	// Iterate through all powers of 2 up to 1e9.
	for powerOfTwo := 1; powerOfTwo <= 1e9; powerOfTwo <<= 1 {
		// Compare the digit count of the current power of 2 with the target.
		if targetDigitCount == countDigits(powerOfTwo) {
			return true // Return true if a match is found.
		}
	}

	// Return false if no permutation matches a power of 2.
	return false
}
