/**
 * Problem: 1283. Find the Smallest Divisor Given a Threshold
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func smallestDivisor(nums []int, threshold int) int {
	// Initialize the starting point of the binary search to 1
	start := 1

	// Initialize the variable to store the smallest divisor
	ans := 0

	// Initialize the ending point of the binary search to the maximum value in nums
	end := nums[0]

	// Iterate through nums to find the maximum value for setting the end boundary
	for _, num := range nums {
		if num > end {
			end = num
		}
	}

	// Perform binary search to find the smallest divisor
	for start <= end {
		// Calculate the middle point of the current search range
		mid := start + (end-start)/2

		// Calculate the sum of nums divided by mid
		sum := calculateSum(nums, mid)

		// If the sum is within the threshold, update the answer
		// and narrow the search range to the left
		if sum <= threshold {
			ans = mid
			end = mid - 1
		} else {
			// Otherwise, narrow the search range to the right
			start = mid + 1
		}
	}

	// Return the smallest divisor that satisfies the condition
	return ans
}

func calculateSum(nums []int, divisor int) int {
	// Initialize the sum variable to accumulate the total sum
	sum := 0

	// Iterate over each number in the nums slice
	for _, dividend := range nums {
		// Add the ceiling of dividend/divisor to the sum
		// (dividend + divisor - 1) / divisor ensures rounding up
		sum += (dividend + divisor - 1) / divisor
	}

	// Return the calculated sum
	return sum
}
