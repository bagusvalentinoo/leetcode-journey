/**
 * Problem: 66. Plus One
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func plusOne(digits []int) []int {
	// Iterate through the digits slice from rightmost digit to leftmost digit.
	for i := len(digits) - 1; i >= 0; i-- {
		// Check if the current digit is less than 9.
		if digits[i] < 9 {
			// Increment the current digit by one.
			digits[i]++

			// Return the modified digits slice immediately.
			return digits
		}

		// Set the current digit to 0 if it is 9 (carry over).
		digits[i] = 0
	}
    
	// If all digits were 9, create a new slice starting with 1 followed by all zeros.
	return append([]int{1}, digits...)
}
