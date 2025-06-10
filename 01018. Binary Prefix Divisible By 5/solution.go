/**
 * Problem: 1018. Binary Prefix Divisible By 5
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func prefixesDivBy5(nums []int) []bool {
	// Initialize result slice to store divisibility results for each prefix
	result := make([]bool, len(nums))
	// Track the running remainder when dividing by 5
	remainder := 0

	for i, bit := range nums {
		// Update remainder: shift left and add current bit, then mod 5
		remainder = ((remainder << 1) | bit) % 5
		// Check if current prefix is divisible by 5
		result[i] = remainder == 0
	}
	
	return result
}
