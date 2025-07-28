/**
 * Problem: 2044. Count Number of Maximum Bitwise-OR Subsets
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countMaxOrSubsets(nums []int) int {
	// Initialize variable to store the maximum bitwise OR value among all subsets
	maxOr := 0

	// Calculate the maximum bitwise OR by OR-ing all elements in nums
	for _, num := range nums {
		maxOr |= num
	}

	// Define a recursive function to count subsets whose bitwise OR equals maxOr
	// nums: input array
	// index: current position in nums
	// currentOr: current accumulated OR value
	// maxOr: target maximum OR value
	var countMaxOrSubsets func(nums []int, index int, currentOr int, maxOr int) int
	countMaxOrSubsets = func(nums []int, index int, currentOr int, maxOr int) int {
		// If currentOr equals maxOr, all remaining elements can be included/excluded freely
		if currentOr == maxOr {
			return 1 << (len(nums) - index) // 2^(remaining elements)
		}
		// If reached the end of nums, no more subsets to consider
		if index == len(nums) {
			return 0
		}

		// Recursively count subsets by excluding or including the current element
		return countMaxOrSubsets(nums, index+1, currentOr, maxOr) +
			countMaxOrSubsets(nums, index+1, currentOr|nums[index], maxOr)
	}

	// Start recursion from index 0 and initial OR value 0
	return countMaxOrSubsets(nums, 0, 0, maxOr)
}
