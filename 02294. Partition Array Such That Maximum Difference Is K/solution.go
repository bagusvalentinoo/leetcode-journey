/**
 * Problem: 2294. Partition Array Such That Maximum Difference Is K
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func partitionArray(nums []int, k int) int {
	// Sort the array to group similar values together
	sort.Ints(nums)
	// Initialize partition count starting with first partition
	partitions := 1
	// Track the minimum value of current partition
	minValue := nums[0]
	
	// Iterate through sorted array to find partition boundaries
	for _, num := range nums {
		// If difference exceeds k, start new partition
		if num - minValue > k {
			minValue = num
			partitions++
		}
	}

	return partitions
}
