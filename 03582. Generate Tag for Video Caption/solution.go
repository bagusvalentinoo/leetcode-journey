/**
 * Problem: 3582. Generate Tag for Video Caption
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func generateTag(caption string) string {
	// Initialize a strings.Builder for efficient string concatenation
	var builder strings.Builder

	// Split caption into individual words (handles multiple spaces)
	words := strings.Fields(caption)

	// If no words found, return just the '#' symbol
	if len(words) == 0 {
		return "#"
	}

	// Write the starting pound sign
	builder.WriteRune('#')

	// Write the first word in lowercase
	builder.WriteString(strings.ToLower(words[0]))

	// Process the remaining words
	for _, word := range words[1:] {
		// Write the first character of the word in uppercase (camelCase)
		builder.WriteString(strings.ToUpper(word[:1]))

		// Write the rest of the word in lowercase
		builder.WriteString(strings.ToLower(word[1:]))
	}

	// Get the final hashtag string
	result := builder.String()

	// Truncate to maximum 100 characters if needed
	if len(result) > 100 {
		return result[:100]
	}

	// Return the formatted hashtag
	return result
}
