/**
 * Problem: 967. Numbers With Same Consecutive Differences
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numsSameConsecDiff(n int, k int) []int {
	// Start with digits 1-9 as initial numbers
	current := make([]int, 0, 9)

	for i := 1; i <= 9; i++ {
		current = append(current, i)
	}

	// For each position after the first digit
	for level := 1; level < n; level++ {
		// Create a container for the next set of valid numbers
		next := make([]int, 0, len(current)*2)

		// Process each number in the current set
		for _, num := range current {
			// Get the last digit to find valid next digits
			lastDigit := num % 10
			
			// Add digit that's k less than the last digit (if valid)
			if lastDigit-k >= 0 {
				next = append(next, num*10+(lastDigit-k))
			}
			// Add digit that's k more than the last digit (if valid and k isn't 0)
			if lastDigit+k <= 9 && k != 0 {
				next = append(next, num*10+(lastDigit+k))
			}
		}

		// Update current set for the next iteration
		current = next
	}

	// Return the final list of valid numbers
	return current
}