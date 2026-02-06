/**
 * Problem: 3637. Trionic Array I
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isTrionic(nums []int) bool {
	// Array must have at least 4 elements for trionic pattern
	if len(nums) < 4 {
		return false
	}

	// Get array length
	arrayLength := len(nums)

	// Initialize pointer
	pointer := 0

	// First segment: strictly increasing
	for pointer+1 < arrayLength && nums[pointer] < nums[pointer+1] {
		pointer++
	}

	// Check if we had at least one increasing step
	if pointer == 0 {
		return false
	}
	decreasingStart := pointer

	// Second segment: strictly decreasing
	for pointer+1 < arrayLength && nums[pointer+1] < nums[pointer] {
		pointer++
	}

	// Check if we had at least one decreasing step
	if pointer == decreasingStart {
		return false
	}
	increasingStart := pointer

	// Third segment: strictly increasing
	for pointer+1 < arrayLength && nums[pointer] < nums[pointer+1] {
		pointer++
	}

	// Check if we had at least one increasing step and reached end
	if pointer == increasingStart {
		return false
	}

	// Return true if we processed all elements
	return pointer == arrayLength-1
}
