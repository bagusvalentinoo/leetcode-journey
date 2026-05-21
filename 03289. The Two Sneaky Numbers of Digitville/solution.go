/**
 * Problem: 3289. The Two Sneaky Numbers of Digitville
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func getSneakyNumbers(nums []int) []int {
	// Map to track seen numbers (using empty struct for zero memory)
	seenNumbers := make(map[int]struct{})

	// Slice to store duplicate numbers (pre-allocate with capacity 2)
	duplicateNumbers := make([]int, 0, 2)

	// Iterate through each number in the array
	for i := 0; i < len(nums); i++ {
		// Check if current number already exists in the map
		_, alreadySeen := seenNumbers[nums[i]]

		// If number already seen, it's a duplicate
		if alreadySeen {
			duplicateNumbers = append(duplicateNumbers, nums[i])
		} else {
			// Otherwise, add the number to the map
			seenNumbers[nums[i]] = struct{}{}
		}
	}

	// Return the two duplicate numbers
	return duplicateNumbers
}
