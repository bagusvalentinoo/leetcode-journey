/**
 * Problem: 1437. Check If All 1's Are at Least Length K Places Away
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func kLengthApart(nums []int, k int) bool {
	// Initialize a variable to store the index of the previous '1' encountered.
	// Set it to -1 initially to indicate no '1' has been found yet.
	prev := -1

	// Iterate through the array with both index and value.
	for i, val := range nums {
		// Check if the current value is '1'.
		if val == 1 {
			// If a previous '1' has been found, check the distance.
			// If the distance is less than 'k', return false.
			if prev != -1 && (i-prev-1) < k {
				return false
			}

			// Update the index of the last encountered '1'.
			prev = i
		}
	}

	// If all '1's are at least 'k' places apart, return true.
	return true
}
