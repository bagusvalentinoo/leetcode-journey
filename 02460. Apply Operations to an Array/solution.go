/**
 * Problem: 2460. Apply Operations to an Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func applyOperations(nums []int) []int {
	// Apply each adjacent operation sequentially
	for i := 0; i < len(nums)-1; i++ {
		// Double equal adjacent values and clear the right value
		if nums[i] == nums[i+1] {
			nums[i] *= 2
			nums[i+1] = 0
		}
	}

	// Track the next position for a non-zero value
	writeIndex := 0

	// Move non-zero values to the front in their original order
	for _, number := range nums {
		if number != 0 {
			nums[writeIndex] = number
			writeIndex++
		}
	}

	// Fill the remaining positions with zeros
	for writeIndex < len(nums) {
		nums[writeIndex] = 0
		writeIndex++
	}

	// Return the transformed array
	return nums
}
