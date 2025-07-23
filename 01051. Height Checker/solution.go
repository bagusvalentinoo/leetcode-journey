/**
 * Problem: 1051. Height Checker
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func heightChecker(heights []int) int {
	// Initialize a counter to keep track of mismatches between original and sorted heights
	res := 0

	// Create a new slice to store a copy of the original heights
	newArr := make([]int, len(heights))

	// Copy the contents of heights into newArr
	copy(newArr, heights)

	// Sort the copied slice to get the expected order of heights
	sort.Ints(newArr)

	// Iterate through each index to compare the original and sorted heights
	for i := range newArr {
		// If the height at the current index does not match, increment the counter
		if newArr[i] != heights[i] {
			res++
		}
	}
	
	// Return the total number of mismatches
	return res
}
