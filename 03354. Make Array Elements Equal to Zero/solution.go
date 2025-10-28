/**
 * Problem: 3354. Make Array Elements Equal to Zero
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countValidSelections(nums []int) int {
	// Get the length of the input array
	n := len(nums)

	// Initialize a variable to store the sum of all elements in the array
	sum := 0

	// Calculate the total sum of the array elements
	for _, x := range nums {
		sum += x
	}

	// Initialize variables:
	// - `ans` to store the count of valid selections
	// - `leftSum` to track the sum of elements to the left of the current index
	// - `rightSum` to track the sum of elements to the right of the current index
	ans, leftSum, rightSum := 0, 0, sum

	// Iterate through each element in the array
	for i := 0; i < n; i++ {
		// Check if the current element is zero
		if nums[i] == 0 {
			// Check if the difference between leftSum and rightSum is valid
			if leftSum-rightSum >= 0 && leftSum-rightSum <= 1 {
				ans++
			}
			// Check if the difference between rightSum and leftSum is valid
			if rightSum-leftSum >= 0 && rightSum-leftSum <= 1 {
				ans++
			}
		} else {
			// Update leftSum and rightSum for non-zero elements
			leftSum += nums[i]
			rightSum -= nums[i]
		}
	}

	// Return the count of valid selections
	return ans
}
