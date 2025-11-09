/**
 * Problem: 1296. Divide Array in Sets of K Consecutive Numbers
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 38 ms (Beats 100%)
 */

func isPossibleDivide(nums []int, k int) bool {
	// Check if the total number of elements is divisible by k
	if len(nums)%k != 0 {
		return false
	}

	// Sort the input array to process numbers in ascending order
	slices.Sort(nums)

	// Initialize a slice to store pairs of numbers and their counts
	var counter [][2]int

	// Pointer to track the start of a group of identical numbers
	i := 0

	// Iterate through the sorted array to count occurrences of each number
	for j, num := range nums {
		// If the current number is different from the starting number
		if num != nums[i] {
			// Update the pointer and append the count of the previous group
			i, counter = j, append(counter, [2]int{nums[i], j - i})
		}
	}

	// Append the count of the last group of numbers
	counter = append(counter, [2]int{nums[i], len(nums) - i})

	// Calculate the number of groups to process
	n := len(counter) - k

	// Iterate through the groups to check if they can form k consecutive sets
	for i := 0; i < n; i++ {
		// Extract the current number and its count
		num, count := counter[i][0], counter[i][1]

		// Skip if the count is already zero
		if count == 0 {
			continue
		}

		// Check the next k groups to form a consecutive sequence
		for j := 0; j < k; j++ {
			// Ensure the numbers are consecutive
			if counter[i+j][0] != num+j {
				return false
			}

			// Decrease the count of the current group
			counter[i+j][1] -= count

			// If the count becomes negative, return false
			if counter[i+j][1] < 0 {
				return false
			}
		}
	}

	// Verify the last k groups to ensure they form a valid sequence
	for i := 0; i < k; i++ {
		// Check if the numbers and counts match the expected pattern
		if counter[n+i][0] != counter[n][0]+i ||
			counter[n+i][1] != counter[n][1] {

			return false
		}
	}

	// Return true if all checks pass
	return true
}
