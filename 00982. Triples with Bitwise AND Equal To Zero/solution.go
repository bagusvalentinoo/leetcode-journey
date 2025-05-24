/**
 * Problem: 982. Triples with Bitwise AND Equal To Zero
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 2 ms (Beats 100%)
 */

func countTriplets(nums []int) int {
	// Find the maximum value in nums to determine our bit mask size
	maxNum := 0
	for _, num := range nums {
		if num > maxNum {
			maxNum = num
		}
	}

	// Calculate the smallest power of 2 that's greater than maxNum
	bitMaskSize := 1
	for bitMaskSize <= maxNum {
		bitMaskSize <<= 1
	}

	// Count occurrences of each AND result between pairs of numbers
	pairCounts := make([]int, bitMaskSize)
	for _, x := range nums {
		for _, y := range nums {
			pairCounts[x&y]++
		}
	}

	// Calculate the total number of valid triplets
	result := 0
	for _, num := range nums {
		// Create complement to check which numbers will AND with num to get 0
		complement := num ^ (bitMaskSize - 1)
		// Add triplets where AND is 0
		result += pairCounts[0]
		
		// Iterate through all subsets of the complement using bit manipulation
		for i := complement; i > 0; i = complement & (i - 1) {
			result += pairCounts[i]
		}
	}

	return result
}