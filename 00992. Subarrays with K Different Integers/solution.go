/**
 * Problem: 992. Subarrays with K Different Integers
 *
 * Difficulty: Hard
 *
 * Language: Go
 *
 * Performance: Runtime - 3 ms (Beats 100%)
 */

func subarraysWithKDistinct(nums []int, k int) int {
	return countAtMostK(nums, k) - countAtMostK(nums, k-1)
}

func countAtMostK(nums []int, k int) int {
	n := len(nums)
	// frequency map to count occurrences of each integer
	freq := make([]int, n+1)
	
	// distinctCount tracks number of distinct integers in current window
	distinctCount, result := 0, 0
	
	// sliding window approach with left and right pointers
	for left, right := 0, 0; right < n; right++ {
		// increment frequency and possibly distinct count for current number
		if freq[nums[right]] == 0 {
			distinctCount++
		}

		freq[nums[right]]++
		
		// shrink window from left if we have more than k distinct integers
		for distinctCount > k {
			freq[nums[left]]--

			if freq[nums[left]] == 0 {
				distinctCount--
			}

			left++
		}
		
		// add count of valid subarrays ending at current position
		result += right - left + 1
	}
	
	return result
}