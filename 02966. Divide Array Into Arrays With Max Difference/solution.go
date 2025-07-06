/**
 * Problem: 2966. Divide Array Into Arrays With Max Difference
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 6 ms (Beats 100%)
 */

func divideArray(nums []int, k int) [][]int {
	// Find minimum and maximum values in the array
	minVal, maxVal := nums[0], nums[0]
	for _, val := range nums[1:] {
		if val < minVal {
			minVal = val
		}
		if val > maxVal {
			maxVal = val
		}
	}
	
	// Count frequency of each number using counting sort
	counts := make([]uint32, maxVal-minVal+1)
	for _, val := range nums {
		counts[val-minVal]++
	}
	
	// Reconstruct sorted array from counts
	index := 0
	for offset, count := range counts {
		for range count {
			nums[index] = offset + minVal
			index++
		}
	}
	
	// Create result arrays of size 3
	result := make([][]int, len(nums)/3)
	index-- // Adjust index from previous loop where index == len(nums)
	
	// Check if triplets satisfy max difference constraint (working backwards)
	for index > 0 && nums[index]-nums[index-2] <= k {
		result[index/3] = nums[index-2 : index+1]
		index -= 3
	}
	
	// Return nil if not all numbers were processed (constraint violated)
	if index > 0 {
		return nil
	}

	return result
}
