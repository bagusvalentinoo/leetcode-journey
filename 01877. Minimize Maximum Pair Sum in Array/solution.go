/**
 * Problem: 1877. Minimize Maximum Pair Sum in Array
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 137 ms (Beats 100%)
 */

func minPairSum(nums []int) int {
	// Sort array in ascending order
	sort.Ints(nums)

	// Track maximum pair sumtnor
	maxPairSum := 0

	// Process pairs from both ends
	for i := 0; i < len(nums)/2; i++ {
		// Update maximum with current pair sum
		maxPairSum = max(maxPairSum, (nums[i] + nums[len(nums)-1-i]))
	}

	// Return minimum maximum pair sum
	return maxPairSum
}
