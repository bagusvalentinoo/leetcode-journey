/**
 * Problem: 1282. Group the People Given the Group Size They Belong To
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func groupThePeople(groupSizes []int) [][]int {
	// Initialize a map to group indices by their group size
	tempGroup := make(map[int][]int)

	// Initialize a slice to store the final result of grouped indices
	var result [][]int

	// Iterate over the groupSizes slice to process each person's group size
	for i, size := range groupSizes {
		// Append the current index to the corresponding group size in the map
		tempGroup[size] = append(tempGroup[size], i)

		// Check if the group has reached the required size
		if len(tempGroup[size]) == size {
			// Add the completed group to the result
			result = append(result, tempGroup[size])

			// Reset the group in the map for the current size
			tempGroup[size] = []int{}
		}
	}

	// Return the final result containing all grouped indices
	return result
}
