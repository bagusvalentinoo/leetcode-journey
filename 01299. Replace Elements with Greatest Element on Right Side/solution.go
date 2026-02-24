/**
 * Problem: 1299. Replace Elements with Greatest Element on Right Side
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func replaceElements(arr []int) []int {
	// Track maximum value seen from the right
	maxRight := -1

	// Traverse array from right to left
	for i := len(arr) - 1; i >= 0; i-- {
		// Store current value before overwriting
		current := arr[i]

		// Replace current element with max from its right
		arr[i] = maxRight

		// Update maxRight for next iteration (elements to the left)
		if current > maxRight {
			maxRight = current
		}
	}

	// Return the modified array
	return arr
}
