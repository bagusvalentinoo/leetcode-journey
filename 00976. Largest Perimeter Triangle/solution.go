/**
 * Problem: 976. Largest Perimeter Triangle
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func largestPerimeter(nums []int) int {
	// Sort the array in ascending order
	sort.Ints(nums)
	
	// Iterate from largest possible triangle sides
	for idx := len(nums)-3; idx >= 0; idx-- {
		// Triangle inequality theorem: sum of any two sides must exceed the third side
		if nums[idx] + nums[idx+1] > nums[idx+2] {
			// Found valid triangle, return perimeter
			return nums[idx] + nums[idx+1] + nums[idx+2]
		}
	}

	// No valid triangle found
	return 0
}