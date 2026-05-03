/**
 * Problem: 3550. Smallest Index With Digit Sum Equal to Index
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func smallestIndex(nums []int) int {
	// Helper function to calculate sum of digits
	digitSum := func(number int) int {
		// Initialize sum accumulator
		sumOfDigits := 0

		// Process each digit until number becomes 0
		for number > 0 {
			// Add last digit to sum
			sumOfDigits += number % 10
			// Remove last digit
			number = number / 10
		}

		return sumOfDigits
	}

	// Iterate through the array to find matching index
	for index := 0; index < len(nums); index++ {
		// Check if current index equals digit sum of the element
		if index == digitSum(nums[index]) {
			return index
		}
	}

	// No matching index found
	return -1
}
