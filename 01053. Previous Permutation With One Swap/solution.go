/**
 * Problem: 1053. Previous Permutation With One Swap
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func prevPermOpt1(arr []int) []int {
	// Get the length of the input array
	n := len(arr)

	// Check if the last two elements are in decreasing order
	if arr[n-1] < arr[n-2] {
		// Swap the last two elements to get the previous permutation
		arr[n-1], arr[n-2] = arr[n-2], arr[n-1]
		return arr
	}

	// Iterate from the third last element to the start
	for i := n - 3; i >= 0; i-- {
		// If the current element is not greater than the next, continue
		if arr[i] <= arr[i+1] {
			continue
		}

		// If the current element is greater than the last element
		if arr[i] > arr[n-1] {
			// Swap the current element with the last element
			arr[n-1], arr[i] = arr[i], arr[n-1]
			return arr
		}

		// Find the largest index after i such that arr[j] < arr[i]
		idx, _ := sort.Find(n-i-1, func(j int) int {
			return arr[i] - arr[i+1+j]
		})

		// Find the rightmost occurrence of the candidate for swap
		idx, _ = sort.Find(n-i-1, func(j int) int {
			return arr[i+idx] - arr[i+1+j]
		})

		// Swap the found element with arr[i]
		arr[i+idx+1], arr[i] = arr[i], arr[i+idx+1]

		// Return the modified array
		return arr
	}

	// If no swap was made, return the original array
	return arr
}
