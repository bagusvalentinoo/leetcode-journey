/**
 * Problem: 1415. The k-th Lexicographical String of All Happy Strings of Length n
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func getHappyString(n int, k int) string {
	// Calculate number of happy strings for each starting letter at current position
	// For length n, each starting letter has 2^(n-1) possible combinations
	groupSize := 1 << (n - 1)

	// If total happy strings (3 * 2^(n-1)) is less than k, return empty string
	if 3*groupSize < k {
		return ""
	}

	// Options for next character based on current last character
	// Index 0: last char 'a' -> next can be 'b' or 'c'
	// Index 1: last char 'b' -> next can be 'a' or 'c'
	// Index 2: last char 'c' -> next can be 'a' or 'b'
	nextOptions := []string{"bc", "ac", "ab"}

	// Result string being built
	result := ""

	// Determine first character based on k
	if k <= groupSize {
		// First group starts with 'a'
		result = "a"
	} else if k <= 2*groupSize {
		// Second group starts with 'b'
		result = "b"
		k -= groupSize
	} else {
		// Third group starts with 'c'
		result = "c"
		k -= 2 * groupSize
	}

	// Build remaining characters
	for position := 1; position < n; position++ {
		// Reduce group size for next level
		groupSize /= 2

		// Get options for next character based on current last character
		// Convert last character to index: 'a'->0, 'b'->1, 'c'->2
		options := nextOptions[result[len(result)-1]-'a']

		// Determine which option to use based on k
		if k <= groupSize {
			// Use first option
			result += string(options[0])
		} else {
			// Use second option
			result += string(options[1])
			k -= groupSize
		}
	}

	return result
}
