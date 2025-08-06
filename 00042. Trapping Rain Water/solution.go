/**
 * Problem: 42. Trapping Rain Water
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func trap(height []int) int {
	// Return 0 if the input slice is empty (no bars, no water can be trapped)
	if len(height) == 0 {
		return 0
	}

	// Initialize two pointers for traversing the slice from both ends
	left, right := 0, len(height)-1

	// Initialize variables to keep track of the maximum height to the left and right of the current position
	leftMax, rightMax := 0, 0

	// Initialize the total amount of trapped water
	waterTrapped := 0

	// Loop until the two pointers meet
	for left < right {
		// If the height at the left pointer is less than or equal to the height at the right pointer
		if height[left] <= height[right] {
			// Update leftMax if the current height is greater than leftMax
			if height[left] > leftMax {
				leftMax = height[left]
			} else {
				// Add the difference between leftMax and the current height to waterTrapped
				waterTrapped += leftMax - height[left]
			}
			// Move the left pointer to the right
			left++
		} else {
			// Update rightMax if the current height is greater than rightMax
			if height[right] > rightMax {
				rightMax = height[right]
			} else {
				// Add the difference between rightMax and the current height to waterTrapped
				waterTrapped += rightMax - height[right]
			}
			// Move the right pointer to the left
			right--
		}
	}

	// Return the total amount of trapped water
	return waterTrapped
}
