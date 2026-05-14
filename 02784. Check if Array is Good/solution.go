/**
 * Problem: 2784. Check if Array is Good
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isGood(nums []int) bool {
	// Length of the input array
	arrayLength := len(nums)

	// Frequency slice for numbers up to arrayLength
	frequency := make([]int, arrayLength)

	// Iterate through each number in the array
	for _, currentNumber := range nums {
		// Check if number is out of valid range
		if currentNumber < 1 || currentNumber >= arrayLength {
			return false
		}
		// For numbers less than n-1, they should appear at most once
		if currentNumber < arrayLength-1 && frequency[currentNumber] > 0 {
			return false
		}
		// For number n-1 (max value), it should appear at most twice
		if currentNumber == arrayLength-1 && frequency[currentNumber] > 1 {
			return false
		}

		// Increment frequency counter
		frequency[currentNumber]++
	}

	// All conditions satisfied
	return true
}
