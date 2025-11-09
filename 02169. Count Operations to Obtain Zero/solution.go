/**
 * Problem: 2169. Count Operations to Obtain Zero
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countOperations(num1 int, num2 int) int {
	// Initialize variables a and b with the values of num1 and num2 respectively
	a, b := num1, num2

	// Initialize a counter variable ops to keep track of the number of operations
	ops := 0
	
	// Loop until either a or b becomes zero
	for a > 0 && b > 0 {
		// Ensure a is always greater than or equal to b by swapping if necessary
		if a < b {
			a, b = b, a
		}

		// Increment the operation count by the quotient of a divided by b
		ops += a / b
		
		// Update a to the remainder of a divided by b
		a = a % b
	}

	// Return the total number of operations performed
	return ops
}
