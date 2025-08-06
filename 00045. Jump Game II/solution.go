/**
 * Problem: 45. Jump Game II
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func jump(nums []int) int {
	// Initialize variables:
	// maxReachable: the farthest index we can reach so far
	// minJumps: the minimum number of jumps needed to reach the end
	// currentEnd: the end of the range that can be reached with the current number of jumps
	// n: the length of the input array
	maxReachable, minJumps, currentEnd, n := 0, 0, 0, len(nums)

	// Iterate through the array, except for the last element
	for i := 0; i < n-1; i++ {
		// Update maxReachable if the current position plus nums[i] is farther
		if i+nums[i] > maxReachable {
			maxReachable = i + nums[i]
		}

		// If we've reached the end of the current jump range,
		// increment the jump count and update the currentEnd to maxReachable
		if i == currentEnd {
			minJumps++
			currentEnd = maxReachable
		}
	}
	
	// Return the minimum number of jumps needed to reach the end
	return minJumps
}
