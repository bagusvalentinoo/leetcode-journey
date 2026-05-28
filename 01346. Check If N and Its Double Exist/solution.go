/**
 * Problem: 1346. Check If N and Its Double Exist
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func checkIfExist(arr []int) bool {
	// Iterate through each element as potential first element
	for i := 0; i < len(arr); i++ {
		// Compare with subsequent elements
		for j := i + 1; j < len(arr); j++ {
			// Check if either value is double the other
			if arr[i] == arr[j]*2 || arr[j] == arr[i]*2 {
				return true
			}
		}
	}

	// If no such pair is found, return false
	return false
}
