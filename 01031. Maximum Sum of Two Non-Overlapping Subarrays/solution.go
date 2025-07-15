/**
 * Problem: 1031. Maximum Sum of Two Non-Overlapping Subarrays
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxSumTwoNoOverlap(nums []int, firstLen int, secondLen int) int {
	// Get the length of the input array
	n := len(nums)
	
	// Array to store the maximum sum of firstLen subarray ending at or before each position
	maxSumEndingAt := make([]int, n)
	
	// Left to right pass: find maximum sum of firstLen subarray ending at or before each position
	currentSum := 0
	windowSize := firstLen
	
	for i := range n {
		// Add current element to the sliding window
		currentSum += nums[i]
		
		// Remove element that's outside the window (sliding window technique)
		if i-windowSize >= 0 {
			currentSum -= nums[i-windowSize]
		}
		
		// Only process when we have a valid window of firstLen elements
		if i-windowSize+1 >= 0 {
			if i == 0 {
				// First valid window position
				maxSumEndingAt[i] = currentSum
			} else {
				// Store maximum between previous best and current window sum
				maxSumEndingAt[i] = max(maxSumEndingAt[i-1], currentSum)
			}
		}
	}
	
	// Array to store the maximum sum of firstLen subarray starting at or after each position
	maxSumStartingAt := make([]int, n)
	
	// Right to left pass: find maximum sum of firstLen subarray starting at or after each position
	currentSum = 0
	
	for i := n - 1; i >= 0; i-- {
		// Add current element to the sliding window (moving right to left)
		currentSum += nums[i]
		
		// Remove element that's outside the window
		if i+windowSize < n {
			currentSum -= nums[i+windowSize]
		}
		
		// Only process when we have a valid window of firstLen elements
		if i <= n-windowSize {
			if i == n-1 {
				// First valid window position from right
				maxSumStartingAt[i] = currentSum
			} else {
				// Store maximum between next best and current window sum
				maxSumStartingAt[i] = max(maxSumStartingAt[i+1], currentSum)
			}
		}
	}
	
	// Variable to track the maximum sum of two non-overlapping subarrays
	maxTotalSum := 0
	currentSum = 0
	secondWindowSize := secondLen
	
	// Iterate through array to find secondLen subarray and combine with firstLen subarray
	for i := range n {
		// Add current element to the secondLen sliding window
		currentSum += nums[i]
		
		// Remove element that's outside the secondLen window
		if i-secondWindowSize >= 0 {
			currentSum -= nums[i-secondWindowSize]
		}
		
		// Skip if the secondLen window is not fully formed yet
		if i-secondWindowSize+1 < 0 {
			continue
		}
		
		// Try placing firstLen subarray after the current secondLen subarray
		if i+windowSize < n {
			maxTotalSum = max(maxTotalSum, currentSum+maxSumStartingAt[i+1])
		}
		
		// Try placing firstLen subarray before the current secondLen subarray
		firstSubarrayEndPos := i - secondWindowSize + 1
		if firstSubarrayEndPos-windowSize >= 0 {
			maxTotalSum = max(maxTotalSum, currentSum+maxSumEndingAt[firstSubarrayEndPos-1])
		}
	}
	
	return maxTotalSum
}
