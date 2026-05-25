/**
 * Problem: 3264. Final Array State After K Multiplication Operations I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func getFinalState(nums []int, k int, multiplier int) []int {
	// Perform k operations
	for k > 0 {
		// Assume first element is the smallest
		smallestValue := nums[0]
		smallestIndex := 0

		// Find the smallest element in the array
		for currentIndex := 0; currentIndex < len(nums); currentIndex++ {
			// Update smallest if current element is smaller
			if nums[currentIndex] < smallestValue {
				smallestValue = nums[currentIndex]
				smallestIndex = currentIndex
			}
		}

		// Multiply the smallest element by multiplier
		nums[smallestIndex] *= multiplier
		// Decrement k after each operation
		k--
	}

	// Return the modified array
	return nums
}
