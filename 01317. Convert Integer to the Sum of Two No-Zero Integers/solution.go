/**
 * Problem: 1317. Convert Integer to the Sum of Two No-Zero Integers
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func getNoZeroIntegers(n int) []int {
	// containsZero checks if the given integer contains the digit zero.
	containsZero := func(num int) bool {
		for num > 0 {
			// If the current digit is zero, return true.
			if num%10 == 0 {
				return true
			}
			// Move to the next digit.
			num /= 10
		}
		// No zero digit found, return false.
		return false
	}

	// Iterate through all possible pairs (i, n-i) where i ranges from 1 to n-1.
	for i := 1; i < n; i++ {
		j := n - i // Calculate the second integer.

		// Check if both i and j do not contain the digit zero.
		if !containsZero(i) && !containsZero(j) {
			// Return the pair as the result.
			return []int{i, j}
		}
	}

	// If no valid pair is found, return an empty slice.
	return []int{}
}
