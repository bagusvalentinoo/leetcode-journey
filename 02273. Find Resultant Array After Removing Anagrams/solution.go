/**
 * Problem: 2273. Find Resultant Array After Removing Anagrams
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// lettersCounts computes frequency counts of lowercase a-z in s.
// It returns an array of 26 uint8s where index 0 maps to 'a'.
func lettersCounts(s string) [26]uint8 {
	// result holds counts for each lowercase English letter.
	var result [26]uint8

	// Iterate over each rune in the input string s.
	for _, c := range s {
		// Increment the bucket corresponding to the letter c.
		result[c-'a']++
	}

	// Return the populated frequency array.
	return result
}

// removeAnagrams removes consecutive anagrams from words,
// preserving the original order of remaining words.
func removeAnagrams(words []string) []string {
	// Initialize result using the first element to keep it.
	// Precondition: words must contain at least one element.
	result := words[:1]

	// Compute counts for the first word to use as the baseline.
	prev := lettersCounts(words[0])

	// Iterate over the remaining words starting at index 1.
	for _, word := range words[1:] {
		// Compute frequency counts for the current word.
		cur := lettersCounts(word)

		// If current counts differ from previous, it's not an anagram.
		if prev != cur {
			// Update prev to the current counts for next comparison.
			prev = cur
			// Append the current non-anagram word to the result slice.
			result = append(result, word)
		}
	}

	// Return the filtered slice with consecutive anagrams removed.
	return result
}
