/**
 * Problem: 1394. Find Lucky Integer in an Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findLucky(arr []int) int {
	// Create a frequency map to count occurrences of each number
	frequency := make(map[int]int)

	// Count the occurrences of each number in the array
	for _, num := range arr {
		frequency[num]++
	}

	// Initialize the result to -1 (no lucky number found)
	maxLucky := -1

	// Check for lucky integers (number equals its frequency)
	for num, freq := range frequency {
		if num == freq && num > maxLucky {
			maxLucky = num
		}
	}

	return maxLucky
}
