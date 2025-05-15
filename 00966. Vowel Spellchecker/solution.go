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
	// Map for exact word matches
	perfectMap := make(map[string]bool)
	// Map for case-insensitive matches, storing original word
	caseMap := make(map[string]string)
	// Map for vowel-insensitive matches, storing original word
	vowelMap := make(map[string]string)

	for _, word := range wordlist {
		// Add word to perfect match map
		perfectMap[word] = true
		lowWord := strings.ToLower(word)

		// Store first occurrence of case-insensitive word
		if caseMap[lowWord] == "" {
			caseMap[lowWord] = word
		}

		// Replace vowels with asterisks for vowel-insensitive matching
		chars := []byte(lowWord)
		for i := range chars {
			if chars[i] == 'a' || chars[i] == 'e' || chars[i] == 'i' || chars[i] == 'o' || chars[i] == 'u' {
				chars[i] = '*'
			}
		}

		// Store first occurrence of vowel-insensitive word
		if vowelMap[string(chars)] == "" {
			vowelMap[string(chars)] = word
		}
	}

	// Result slice to store answers
	results := make([]string, 0)

	for _, query := range queries {
		// Try exact match first
		if perfectMap[query] {
			results = append(results, query)
			continue
		}

		// Try case-insensitive match
		lowQuery := strings.ToLower(query)
		if caseMap[lowQuery] != "" {
			results = append(results, caseMap[lowQuery])
			continue
		}

		// Try vowel-insensitive match
		chars := []byte(lowQuery)
		for i := range chars {
			if chars[i] == 'a' || chars[i] == 'e' || chars[i] == 'i' || chars[i] == 'o' || chars[i] == 'u' {
				chars[i] = '*'
			}
		}

		if vowelMap[string(chars)] != "" {
			results = append(results, vowelMap[string(chars)])
			continue
		}

		// No match found
		results = append(results, "")
	}
	
	return results
}