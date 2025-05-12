/**
 * Problem: 2094. Finding 3-Digit Even Numbers
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

 func findEvenNumbers(digits []int) []int {
	// Store unique even numbers and track digit frequency
	result := make([]int, 0)
	repeats := make([]int, 10) // initialized to 0 by default in Go

	// Count occurrences of each digit
	for _, digit := range digits {
		repeats[digit]++
	}

	// Check all possible 3-digit even numbers (last digit must be even)
	for i := 100; i <= 999; i += 2 {
		// Extract individual digits
		hundreds := i / 100
		tens := (i % 100) / 10
		ones := i % 10

		// Verify if we can form this number with available digits
		correct := true

		// Make a copy of repeats to avoid modifying the original
		tempRepeats := make([]int, 10)
		copy(tempRepeats, repeats)

		// Try to use each digit and check if we have enough
		tempRepeats[hundreds]--
		if tempRepeats[hundreds] < 0 {
			correct = false
		}

		tempRepeats[tens]--
		if tempRepeats[tens] < 0 {
			correct = false
		}

		tempRepeats[ones]--
		if tempRepeats[ones] < 0 {
			correct = false
		}

		if correct {
			result = append(result, i)
		}
	}

	// The numbers are already in order due to the loop, but we'll sort to be safe
	sort.Ints(result)
	return result
}