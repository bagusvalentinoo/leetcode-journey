/**
 * Problem: 55. Jump Game
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func canJump(nums []int) bool {
	// If array has 0 or 1 element, already at last index
	if len(nums) <= 1 {
		return true
	}

	// Track the farthest reachable index so far
	farthestReach := nums[0]

	// Iterate through each position
	for i := 0; i < len(nums); i++ {
		// If we can't go further and current position is zero, stuck
		if farthestReach <= i && nums[i] == 0 {
			return false
		}
		// Update farthest reachable index from current position
		if i+nums[i] > farthestReach {
			farthestReach = i + nums[i]
		}
		// If we can reach or exceed last index, success
		if farthestReach >= len(nums)-1 {
			return true
		}
	}

	// If loop finishes without reaching last index
	return false
}
