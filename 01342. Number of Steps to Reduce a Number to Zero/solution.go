/**
 * Problem: 1342. Number of Steps to Reduce a Number to Zero
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numberOfSteps(num int) int {
	// Counter for number of steps taken
	stepCount := 0

	// Continue until number becomes zero
	for num > 0 {
		// If number is even, divide by 2
		if num%2 == 0 {
			num = num / 2
		} else {
			// If number is odd, subtract 1
			num -= 1
		}

		// Increment step counter
		stepCount++
	}

	// Return total steps taken
	return stepCount
}
