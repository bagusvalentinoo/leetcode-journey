/**
 * Problem: 2553. Separate the Digits in an Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func separateDigits(nums []int) []int {
	// Initialize result array
	result := make([]int, 0)

	// Iterate through each number
	for _, num := range nums {
		// Convert number to string
		numStr := strconv.Itoa(num)

		// Add each digit to result
		for _, ch := range numStr {
			result = append(result, int(ch-'0'))
		}
	}

	// Return the result array
	return result
}
