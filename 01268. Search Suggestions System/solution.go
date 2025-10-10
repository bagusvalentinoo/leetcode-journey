/**
 * Problem: 1268. Search Suggestions System
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func suggestedProducts(products []string, searchWord string) [][]string {
	// Get the total number of products
	productCount := len(products)
	// Initialize the result slice to store suggestions for each character in searchWord
	suggestions := make([][]string, len(searchWord))

	// Initialize the starting index for searching in products
	startIndex := 0

	// Sort the products lexicographically to enable binary search and ordered suggestions
	sort.Strings(products)

	// Iterate over each character in searchWord to build the prefix
	for i := range searchWord {
		// Extract the current prefix from searchWord
		prefix := searchWord[:i+1]
		// Use binary search to find the first product that matches the prefix
		foundIndex := sort.SearchStrings(products[startIndex:], prefix)

		// Update the starting index for the next search
		startIndex = startIndex + foundIndex

		// Initialize a slice to store up to 3 matching products for the current prefix
		currentSuggestions := []string{}

		// Collect up to 3 products that start with the current prefix
		for k := 0; k < 3 && startIndex+k < productCount; k++ {
			if strings.HasPrefix(products[startIndex+k], prefix) {
				currentSuggestions = append(currentSuggestions, products[startIndex+k])
			}
		}

		// Store the current suggestions in the result slice
		suggestions[i] = currentSuggestions
	}

	// Return the list of suggestions for each prefix of searchWord
	return suggestions
}
