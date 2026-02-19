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
	// Initialize counter for numbers with even digits
	count := 0

	// Iterate through each number in the array
	for _, num := range nums {
		// Convert number to string and check if length is even
		if len(strconv.Itoa(num))%2 == 0 {
			count++
		}
	}

	return count
}
