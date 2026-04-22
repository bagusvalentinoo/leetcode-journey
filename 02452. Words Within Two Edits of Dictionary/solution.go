/**
 * Problem: 2452. Words Within Two Edits of Dictionary
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func twoEditWords(queries []string, dictionary []string) []string {
	// Slice to store matching queries
	matchingQueries := make([]string, 0)

	// Get length of each query (all strings have same length)
	stringLength := len(queries[0])

	// Iterate through each query
	for queryIndex := 0; queryIndex < len(queries); queryIndex++ {
		// Compare with each word in dictionary
		for dictIndex := 0; dictIndex < len(dictionary); dictIndex++ {
			// Counter for character differences (edits)
			editCount := 0

			// Compare characters at each position
			for charPosition := 0; charPosition < stringLength; charPosition++ {
				// Increment edit count if characters differ
				if queries[queryIndex][charPosition] != dictionary[dictIndex][charPosition] {
					editCount++
				}
				// Early exit if edits exceed 2
				if editCount > 2 {
					break
				}
			}

			// If edit count is within limit (<=2)
			if editCount <= 2 {
				// Add query to result
				matchingQueries = append(matchingQueries, queries[queryIndex])

				// Stop checking other dictionary words for this query
				break
			}
		}
	}

	// Return slice of matching queries
	return matchingQueries
}
