/**
 * Problem: 3545. Minimum Deletions for At Most K Distinct Characters
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minDeletion(s string, k int) int {
	// Map to store frequency of each character
	frequencyMap := make(map[rune]int)

	// Count occurrences of each character in the string
	for _, character := range s {
		frequencyMap[character]++
	}

	// Extract frequency values into a slice
	frequencySlice := []int{}

	// Add each frequency to the slice
	for _, count := range frequencyMap {
		frequencySlice = append(frequencySlice, count)
	}

	// Sort frequencies in ascending order
	sort.Ints(frequencySlice)

	// Accumulator for total deletions
	totalDeletions := 0

	// Process frequencies from smallest to largest
	for index, count := range frequencySlice {
		// If remaining distinct characters (including current) is <= k, stop deleting
		if len(frequencySlice)-index <= k {
			return totalDeletions
		}

		// Delete all occurrences of the smallest frequency character
		totalDeletions += count
	}

	// Return total deletions required
	return totalDeletions
}
