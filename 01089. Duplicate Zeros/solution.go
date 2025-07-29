/**
 * Problem: 1089. Duplicate Zeros
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func duplicateZeros(arr []int) {
	// Count the number of zeros in the array
	zeroCount := 0
	for _, value := range arr {
		if value == 0 {
			zeroCount++
		}
	}

	// Traverse the array backwards to duplicate zeros in-place
	for i := len(arr) - 1; i >= 0; i-- {
		// If current element is zero, duplicate it
		if arr[i] == 0 {
			// Place zero at the shifted position if within bounds
			if zeroCount+i < len(arr) {
				arr[zeroCount+i] = 0
			}
			// Place duplicated zero at the next shifted position if within bounds
			if zeroCount-1+i < len(arr) {
				arr[zeroCount-1+i] = 0
			}
			// Decrement zeroCount as one zero has been processed
			zeroCount--
		} else if i+zeroCount < len(arr) {
			// Shift non-zero element to its new position if within bounds
			arr[zeroCount+i] = arr[i]
		}
	}
}
