/**
 * Problem: 1248. Count Number of Nice Subarrays
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0Gg ms (Beats 100%)
 */

func numberOfSubarrays(nums []int, k int) int {
	// Get the length of the input slice nums
	l := len(nums)
	// Initialize the starting index for the sliding window
	start := 0
	// Initialize the count of odd numbers in the current window
	oddCount := 0

	// Initialize the result to store the total number of nice subarrays
	var result int

	// Iterate through each element in nums using index i
	for i := 0; i < l; i++ {
		// If the current number is odd, increment oddCount
		if nums[i]&1 == 1 {
			oddCount++
		}

		// When the window contains exactly k odd numbers
		if oddCount == k {
			// Find the right boundary where the next odd number appears
			right := i + 1

			// Move right pointer forward while the numbers are even
			for right < l && nums[right]&1 == 0 {
				right++
			}

			// Move start pointer forward while the numbers are even
			for nums[start]&1 == 0 {
				// Add the number of subarrays ending at right boundary
				result += (right - i)
				start++
			}

			// Add the number of subarrays for the current window
			result += (right - i)
			// Move start pointer forward to shrink the window
			start++
			// Decrement oddCount as the window is shifted
			oddCount--
		}
	}

	// Return the total count of nice subarrays
	return result
}
