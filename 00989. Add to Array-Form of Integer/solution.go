/**
 * Problem: 989. Add to Array-Form of Integer
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func addToArrayForm(num []int, k int) []int {
	// Iterate from the end of the array while we still have a value to add
	for idx := len(num)-1; k > 0; idx-- {
		if idx >= 0 {
			// Add k to the current digit
			k += num[idx]
			// Set the current digit to the ones place of k
			num[idx] = k % 10
		} else {
			// If we've gone beyond the array, prepend the ones place of k
			num = append([]int{k % 10}, num...)
		}

		// Move to the next digit by dividing k by 10
		k /= 10
	}

	return num
}