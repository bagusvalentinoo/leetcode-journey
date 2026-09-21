/**
 * Problem: 1773. Count Items Matching a Rule
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func countMatches(items [][]string, ruleKey string, ruleValue string) int {
	// Map rule key to column index (type = 0, color = 1, name = 2)
	keyIndex := 2
	if ruleKey == "type" {
		keyIndex = 0
	} else if ruleKey == "color" {
		keyIndex = 1
	}

	// Counter for matching items
	matchesCount := 0

	// Iterate through each item in the array
	for _, item := range items {
		// Check if the ruled column equals the rule value
		if item[keyIndex] == ruleValue {
			matchesCount++
		}
	}

	// Return the total number of matching items
	return matchesCount
}
