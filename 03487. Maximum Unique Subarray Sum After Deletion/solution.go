/**
 * Problem: 3487. Maximum Unique Subarray Sum After Deletion
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxSum(nums []int) int {
	// Initialize result sum
	totalSum := 0

	// Map to track seen numbers (struct{} uses zero memory)
	seenNumbers := make(map[int]struct{})

	// Sort array to easily get max if needed
	slices.Sort(nums)

	// Iterate through each number in the array
	for _, currentNum := range nums {
		// Skip non-positive numbers
		if currentNum <= 0 {
			continue
		}
		// Skip if number has been seen before
		if _, alreadySeen := seenNumbers[currentNum]; alreadySeen {
			continue
		}

		// Add unique positive number to sum
		totalSum += currentNum

		// Mark number as seen
		seenNumbers[currentNum] = struct{}{}
	}

	// If no positive numbers found and array is not empty, return maximum element (which will be negative)
	if len(seenNumbers) == 0 && len(nums) > 0 {
		return nums[len(nums)-1] // Last element after sort is max
	}

	// Return sum of unique positive numbers
	return totalSum
}
