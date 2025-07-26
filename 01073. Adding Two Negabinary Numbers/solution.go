/**
 * Problem: 1073. Adding Two Negabinary Numbers
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func addNegabinary(arr1 []int, arr2 []int) []int {
		// If arr1 is shorter than arr2, swap them so arr1 is always the longer one
		if len(arr1) < len(arr2) {
			arr1, arr2 = arr2, arr1
		}
		
		// Add arr2 to arr1 from least significant bit to most significant bit
		for i := 0; i < len(arr2); i++ {
			arr1[len(arr1)-i-1] += arr2[len(arr2)-i-1]
		}

		// Initialize result slice to store the final answer
		result := []int{}

		// Normalize arr1 to handle negabinary carries
		for i := 0; i < len(arr1); i++ {
			index := len(arr1)-i-1 // Current index from right to left
			currentBit := arr1[index] // Current bit value
			arr1[index] %= 2 // Reduce bit to 0 or 1

			// If currentBit is 0 or 1, no carry needed
			if currentBit <= 1 {
				continue
			}
			// If previous bit exists and is positive, subtract carry from it
			if index-1 >= 0 && arr1[index-1] > 0 {
				arr1[index-1]--
			// Otherwise, propagate carry to previous two bits
			} else if index-2 >= 0 {
				arr1[index-1]++
				arr1[index-2]++
			// If no previous bits, prepend [1, 1] to result
			} else {
				result = []int{1,1}
			}
		}

		// Append normalized arr1 to result
		result = append(result, arr1...)

		// Find the first non-zero bit to remove leading zeros
		var firstOneIndex int
		for firstOneIndex = 0; firstOneIndex < len(result); firstOneIndex++ {
			if result[firstOneIndex] == 1 {
				break
			}
		}

		// If all bits are zero, return [0]
		if len(result) == firstOneIndex {
			return []int{0}
		}
		
		// Return result without leading zeros
		return result[firstOneIndex:]
}
