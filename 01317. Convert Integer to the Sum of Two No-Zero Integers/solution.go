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
	// Iterate through all possible values for the first integer, starting from 1 up to n
	for firstInt := 1; firstInt <= n; firstInt++ {
		// Calculate the second integer so that their sum equals n
		secondInt := n - firstInt

		// Helper function to check if a number contains zero
		containsZero := func(num int) bool {
			// Continue while there are digits left to check
			for num > 0 {
				// If the last digit is zero, number contains zero
				if num%10 == 0 {
					return true
				}

				// Remove the last digit and continue checking
				num /= 10
			}

			// No zero digit found in the number
			return false
		}

		// Check if both integers do not contain the digit '0'
		if !containsZero(firstInt) && !containsZero(secondInt) {
			// If both integers are valid, return them as a slice
			return []int{firstInt, secondInt}
		}
	}

	// Fallback return (should not reach here as per problem constraints)
	return []int{-1, -1}
}
