/**
 * Problem: 1144. Decrease Elements To Make Array Zigzag
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func movesToMakeZigzag(nums []int) int {
	// Helper function to calculate moves for a given zigzag pattern
	calcMoves := func(peakAtEven bool) int {
		// Initialize total moves counter
		moves := 0

		// Store array length for reuse
		n := len(nums)

		// Iterate through each element in the array
		for i := 0; i < n; i++ {
			// Initialize left neighbor with maximum integer value
			left := int(^uint(0) >> 1)

			// If not the first element, get actual left neighbor
			if i > 0 {
				left = nums[i-1]
			}

			// Initialize right neighbor with maximum integer value
			right := int(^uint(0) >> 1)

			// If not the last element, get actual right neighbor
			if i < n-1 {
				right = nums[i+1]
			}

			// Determine if current index should be a peak (if peakAtEven true) or valley
			if (i%2 == 0) != peakAtEven {
				// Start with left neighbor as the minimum
				minNeighbor := left

				// Update minimum if right neighbor is smaller
				if right < minNeighbor {
					minNeighbor = right
				}

				// If current value is not less than minNeighbor, calculate required moves
				if nums[i] >= minNeighbor {
					moves += nums[i] - (minNeighbor - 1)
				}
			}
		}

		// Return total moves for this zigzag pattern
		return moves
	}

	// Calculate moves for both patterns (even indices as peaks, odd indices as peaks)
	result1, result2 := calcMoves(true), calcMoves(false)

	// Return the minimum moves required
	if result1 < result2 {
		return result1
	}

	// Return result2 if it's smaller or equal
	return result2
}
