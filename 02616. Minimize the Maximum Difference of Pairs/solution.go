/**
 * Problem: 2616. Minimize the Maximum Difference of Pairs
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 4 ms (Beats 100%)
 */

func minimizeMax(nums []int, p int) int {
	// Return 0 if no pairs needed
	if p == 0 {
		return 0
	}
	
	// Sort array to enable greedy pairing
	sort.Ints(nums)
	n := len(nums)
	
	// Binary search bounds: min=0, max=largest possible difference
	minDiff, maxDiff := 0, nums[n-1] - nums[0]
	
	// Binary search for minimum maximum difference
	for minDiff < maxDiff {
		// Calculate middle value for current search range
		midDiff := minDiff + (maxDiff - minDiff) / 2
		pairCount := 0
		
		// Count pairs with difference <= midDiff using greedy approach
		for i := 0; i < n - 1; i++ {
			if nums[i+1] - nums[i] <= midDiff {
				pairCount++
				i++ // Skip next element as it's already paired
			}
		}
		
		// If we can form enough pairs, try smaller maximum difference
		if pairCount >= p {
			maxDiff = midDiff
		} else {
			minDiff = midDiff + 1
		}
	}
	
	return minDiff
}
