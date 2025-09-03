/**
 * Problem: 1207. Unique Number of Occurrences
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func uniqueOccurrences(numbers []int) bool {
	// Create a map to store the count of each number in the input slice.
	counts := make(map[int]int)

	// Iterate over the numbers slice and count the occurrences of each number.
	for i := 0; i < len(numbers); i++ {
		counts[numbers[i]]++
	}

	// Create a map to track if a particular count value has already been seen.
	exists := make(map[int]bool)

	// Iterate over the counts map to check for duplicate occurrence counts.
	for _, count := range counts {
		// If the count has already been seen, return false as occurrences are not unique.
		if exists[count] {
			return false
		}

		// Mark this count as seen.
		exists[count] = true
	}
	
	// If all occurrence counts are unique, return true.
	return true
}
