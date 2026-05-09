/**
 * Problem: 3471. Find the Largest Almost Missing Integer
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func largestInteger(nums []int, k int) int {
	// Get length of the input array
	arrayLength := len(nums)

	// If array has only one element, return that element
	if arrayLength == 1 {
		return nums[0]
	}

	// Handle different cases based on k value
	switch k {
	// Case 1: k equals 1 (each subarray is a single element)
	case 1:
		// Sort array in ascending order
		slices.Sort(nums)

		// Reverse to get descending order
		slices.Reverse(nums)

		// Counter for consecutive identical numbers
		consecutiveCount := 1

		// Iterate through sorted array to find first number that appears once
		for i := 1; i < len(nums); i++ {
			// If current equals previous, increment counter
			if nums[i] == nums[i-1] {
				consecutiveCount++
			} else {
				// If current number appears only once, return it
				if consecutiveCount == 1 {
					return nums[i-1]
				}

				// Reset counter for new number
				consecutiveCount = 1
			}
		}

		// Check the last number
		if consecutiveCount == 1 {
			return nums[arrayLength-1]
		}

		// No number appears exactly once
		return -1

	// Case 2: k equals array length (only one subarray)
	case arrayLength:
		// Variable to track maximum value
		maxValue := 0

		// Find maximum element in the array
		for _, value := range nums {
			// If value is greater than current max, update max
			if value > maxValue {
				maxValue = value
			}
		}

		// Return maximum value
		return maxValue

	// Case 3: k is between 2 and n-1
	default:
		// First and last elements of the array
		leftCandidate := nums[0]
		rightCandidate := nums[arrayLength-1]

		// If first and last are equal, no valid candidate
		if leftCandidate == rightCandidate {
			return -1
		}

		// Check if left candidate appears elsewhere in the array
		for i := 1; i < arrayLength-1; i++ {
			// If left candidate found in middle, invalidate it
			if nums[i] == leftCandidate {
				leftCandidate = -1
			}
			// If right candidate found in middle, invalidate it
			if nums[i] == rightCandidate {
				rightCandidate = -1
			}
		}

		// Return the larger of the two candidates
		if leftCandidate > rightCandidate {
			return leftCandidate
		}

		// Return right candidate
		return rightCandidate
	}
}
