/**
 * Problem: 1005. Maximize Sum Of Array After K Negations
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func largestSumAfterKNegations(nums []int, k int) int {
	// Sort the array in ascending order to negate the smallest values first
	slices.Sort(nums)

	// Initialize sum to track the final result
	totalSum := 0
	for i := range nums {
		// Negate negative numbers first if we still have negations left
		if k > 0 && nums[i] < 0 {
			nums[i] = -nums[i]
			k--
		}
		
		totalSum += nums[i]
	}

	// If remaining negations are odd, negate the smallest number
	if k%2 > 0 {
		totalSum -= 2 * slices.Min(nums)
	}

	return totalSum
}
