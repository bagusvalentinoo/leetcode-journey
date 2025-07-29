/**
 * Problem: 2411. Smallest Subarrays With Maximum Bitwise OR
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 7 ms (Beats 100%)
 */

func smallestSubarrays(nums []int) []int {
	n := len(nums) // Get the length of the input array 'nums'
	pos := make([]int, 31) // Create a slice to store the last seen position for each bit (0-30)

	for i := range pos {
		pos[i] = -1 // Initialize all positions to -1 (meaning not seen yet)
	}

	ans := make([]int, n) // Create a slice to store the answer for each index

	for i := n - 1; i >= 0; i-- { // Iterate from the end of the array to the beginning
		j := i // Initialize 'j' as the current index

		for bit := 0; bit < 31; bit++ { // Check each bit position from 0 to 30
			if (nums[i] & (1 << bit)) == 0 { // If the current bit is not set in nums[i]
				if pos[bit] != -1 { // If this bit has been seen before
					j = max(j, pos[bit]) // Update 'j' to the farthest position where this bit was set
				}
			} else {
				pos[bit] = i // Update the last seen position for this bit to the current index
			}
		}

		ans[i] = j - i + 1 // Calculate the length of the smallest subarray starting at 'i'
	}

	return ans // Return the result slice
}
