/**
 * Problem: 611. Valid Triangle Number
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 12 ms (Beats 100%)
 */

func triangleNumber(nums []int) int {
	// Sort the input slice to simplify triangle inequality checks
	slices.Sort(nums)
	
	// Initialize the result counter for valid triangles
	result := 0
	
	// Get the length of the input slice
	numCount := len(nums)

	// Iterate from the last element down to the third element
	for i := numCount - 1; i >= 2; i-- {
		// If the sum of the two smallest numbers is greater than the current largest,
		// all combinations before i can form a triangle
		if nums[0]+nums[1] > nums[i] {
			result += (i+1)*i*(i-1)/6 // Add all possible combinations using combinatorics
			break // No need to check further, as all previous can form triangles
		}
		// If the sum of the two largest numbers before i is not greater than nums[i],
		// skip this iteration as no triangle can be formed with nums[i]
		if nums[i-2]+nums[i-1] <= nums[i] {
			continue
		}

		// Use two pointers to find valid pairs
		left, right := 0, i-1

		for left < right {
			// If the sum of nums[left] and nums[right] is greater than nums[i],
			// all elements between left and right can form a triangle with nums[i]
			if nums[left]+nums[right] > nums[i] {
				result += right - left // Count all valid pairs
				right-- // Move the right pointer leftward
			} else {
				left++ // Move the left pointer rightward
			}
		}
	}
	
	// Return the total count of valid triangles
	return result
}
