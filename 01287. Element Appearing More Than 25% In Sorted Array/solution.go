/**
 * Problem: 1287. Element Appearing More Than 25% In Sorted Array
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findSpecialInteger(arr []int) int {
	// Initialize a counter to track the frequency of the current element
	cnt := 1

	// Iterate through the array starting from the second element
	for i := 1; i < len(arr); i++ {
		// Check if the current element is the same as the previous one
		if arr[i] == arr[i-1] {
			// Increment the counter if the elements are the same
			cnt++
		} else if cnt > len(arr)/4 {
			// If the counter exceeds 25% of the array length, return the element
			return arr[i-1]
		} else {
			// Reset the counter if the current element is different
			cnt = 1
		}
	}

	// Return the last element if it appears more than 25% of the time
	return arr[len(arr)-1]
}
