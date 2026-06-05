/**
 * Problem: 1385. Find the Distance Value Between Two Arrays
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findTheDistanceValue(arr1 []int, arr2 []int, d int) int {
	// Counter for elements that satisfy the condition
	validElementCount := 0

	// Iterate through each element in the first array
	for i := 0; i < len(arr1); i++ {
		// Flag to track if current element is valid (initially assumed true)
		isValid := true

		// Check distance against all elements in second array
		for j := 0; j < len(arr2); j++ {
			// Calculate absolute difference
			diff := arr1[i] - arr2[j]

			// Convert to absolute value if negative
			if diff < 0 {
				diff = -diff
			}
			// Check if difference is within the distance threshold
			if diff <= d {
				// Mark as invalid
				isValid = false
				// Exit inner loop early since no need to check further
				break
			}
		}

		// Increment counter if element is valid
		if isValid {
			validElementCount++
		}
	}

	// Return the total count of valid elements
	return validElementCount
}
