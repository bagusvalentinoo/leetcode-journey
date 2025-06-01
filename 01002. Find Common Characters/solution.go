/**
 * Problem: 1002. Find Common Characters
 *
 * Difficulty: Easy
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func commonChars(a []string) []string {
	// Initialize array to track minimum occurrences of each letter (a-z)
	minCounts := make([]int, 26)

	// Set initial values to max integer
	for i := range minCounts {
		minCounts[i] = math.MaxInt32
	}

	// Process each string in the input array
	for _, word := range a {
		// Count occurrences of each letter in current word
		charCounts := make([]int, 26)

		// Increment count for each character in the word
		for _, char := range word {
			charCounts[char-'a']++
		}
		// Update minimum counts across all words
		for i := 0; i < 26; i++ {
			minCounts[i] = min(minCounts[i], charCounts[i])
		}
	}

	// Create result array of strings
	result := []string{}

	// Add each character to result based on its minimum count
	for i := 0; i < 26; i++ {
		for minCounts[i] > 0 {
			result = append(result, string('a'+i))
			minCounts[i]--
		}
	}
	
	return result
}