/**
 * Problem: 1636. Sort Array by Increasing Frequency
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func frequencySort(nums []int) []int {
	// Count frequency of each value
	frequency := make(map[int]int)

	// Populate frequency map with occurrence counts
	for _, num := range nums {
		frequency[num]++
	}

	// Sort by frequency ascending, then by value descending for ties
	sort.Slice(nums, func(i, j int) bool {
		if frequency[nums[i]] == frequency[nums[j]] {
			return nums[i] > nums[j]
		}
		return frequency[nums[i]] < frequency[nums[j]]
	})

	// Return the sorted array
	return nums
}
