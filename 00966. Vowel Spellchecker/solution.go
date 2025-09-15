/**
 * Problem: 966. Vowel Spellchecker
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 10 ms (Beats 100%)
 */

func spellchecker(wordlist []string, queries []string) []string {
	// exact stores all words in wordlist for exact match checking.
	exact := map[string]struct{}{}

	for _, word := range wordlist {
		exact[word] = struct{}{}
	}

	// caseInsensitive maps lowercased words to their original form for case-insensitive matching.
	caseInsensitive := map[string]string{}

	for _, word := range wordlist {
		lowerWord := strings.ToLower(word)

		// Only set the mapping if it doesn't exist to preserve the first occurrence.
		if _, exists := caseInsensitive[lowerWord]; !exists {
			caseInsensitive[lowerWord] = word
		}
	}

	// devoweled maps words with vowels replaced by '*' to their original form for vowel error matching.
	devoweled := map[string]string{}

	for _, word := range wordlist {
		devoweledWord := devowel(word)

		// Only set the mapping if it doesn't exist to preserve the first occurrence.
		if _, exists := devoweled[devoweledWord]; !exists {
			devoweled[devoweledWord] = word
		}
	}

	// result stores the final answers for each query.
	result := make([]string, len(queries))
	
	for i, query := range queries {
		// Check for exact match.
		if _, exists := exact[query]; exists {
			result[i] = query
			continue
		}
		// Check for case-insensitive match.
		if original, exists := caseInsensitive[strings.ToLower(query)]; exists {
			result[i] = original
			continue
		}
		// Check for vowel error match.
		if original, exists := devoweled[devowel(query)]; exists {
			result[i] = original
			continue
		}

		// No match found, return empty string.
		result[i] = ""
	}

	return result
}

// devowel replaces all vowels in the word with '*' and returns the new string.
func devowel(word string) string {
	lowerWord := strings.ToLower(word)

	var builder strings.Builder

	builder.Grow(len(lowerWord))
	
	for _, char := range lowerWord {
		if isVowel(char) {
			builder.WriteRune('*')
		} else {
			builder.WriteRune(char)
		}
	}

	return builder.String()
}

// isVowel checks if the given rune is a vowel (a, e, i, o, u).
func isVowel(char rune) bool {
	return char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'
}
