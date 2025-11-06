/**
 * Problem: 1291. Sequential Digits
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func sequentialDigits(low int, high int) []int {
	// Define a slice containing all possible sequential digit numbers.
	possible := []int{
		12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789,
		1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678,
		56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789,
		12345678, 23456789, 123456789,
	}

	// Initialize an empty slice to store the result.
	var ans []int

	// Iterate through the possible sequential digit numbers.
	for _, num := range possible {
		// Check if the current number is within the range [low, high].
		if low <= num && num <= high {
			// Append the number to the result slice if it is in range.
			ans = append(ans, num)
		}
	}

	// Return the resulting slice of sequential digit numbers.
	return ans
}
