/**
 * Problem: 962. Maximum Width Ramp
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxWidthRamp(nums []int) int {
	// Stack to store indices of decreasing elements
	stack := make([]int, 0, len(nums))
	maxWidth := 0

	// First pass: build stack of indices where values are in decreasing order
	for i, num := range nums {
		if len(stack) == 0 || num < nums[stack[len(stack)-1]] {
			stack = append(stack, i)
		}
	}

	// Second pass: scan from right to left to find valid ramps
	for j := len(nums) - 1; j >= 0; j-- {
		// Find all valid ramps ending at position j
		for len(stack) > 0 && nums[j] >= nums[stack[len(stack)-1]] {
			// Pop the last index from the stack
			i := stack[len(stack)-1]
			stack = stack[:len(stack)-1]

			// Calculate width and update maximum
			if width := j - i; width > maxWidth {
				maxWidth = width
			}
		}
	}

	return maxWidth
}