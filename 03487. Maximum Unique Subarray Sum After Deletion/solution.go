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
	// Initialize maxNum to a very small value to track the maximum number in nums
	maxNum := -10000
	// Create a map to store unique numbers from nums
	uniqueNums := make(map[int]bool)

	// Iterate through each number in nums
	for _, num := range nums {
		// Mark the number as seen in the map
		uniqueNums[num] = true

		// Update maxNum if the current number is greater
		if num > maxNum {
			maxNum = num
		}
	}

	// If the maximum number is non-positive, return it as the result
	if maxNum <= 0 {
		return maxNum
	}

	// Initialize sum to accumulate the sum of unique positive numbers
	sum := 0

	// Iterate through the unique numbers
	for k := range uniqueNums {
		// Add only positive numbers to the sum
		if k > 0 {
			sum += k
		}
	}

	// Return the sum of unique positive numbers
	return sum
}
