/**
 * Problem: 1295. Find Numbers with Even Number of Digits
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findNumbers(nums []int) int {
	// Initialize a counter to keep track of numbers with even digit counts
	cnt := 0

	// Iterate over each number in the input slice
	for _, num := range nums {
		// Initialize a variable to count the number of digits in the current number
		size := 0

		// Loop to calculate the number of digits in the current number
		for num > 0 {
			// Increment the digit count
			size++
			// Remove the last digit from the number
			num /= 10
		}

		// Check if the digit count is even
		if size&1 == 0 {
			// Increment the counter for numbers with even digit counts
			cnt++
		}
	}
	
	// Return the total count of numbers with even digit counts
	return cnt
}
