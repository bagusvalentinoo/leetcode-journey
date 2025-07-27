/**
 * Problem: 1078. Occurrences After Bigram
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findOcurrences(text string, first string, second string) []string {
	// Split the input text into a slice of words using space as the delimiter.
	words := strings.Split(text, " ")

	// Initialize a slice to store the resulting words that occur after the bigram.
	var occurrencesAfterBigram []string

	// Iterate through the words slice, stopping two elements before the end to avoid out-of-range errors.
	for i := 0; i < len(words)-2; i++ {
		// Check if the current word and the next word match the given 'first' and 'second' words.
		if words[i] == first && words[i+1] == second {
			// If a match is found, append the word following the bigram to the result slice.
			occurrencesAfterBigram = append(occurrencesAfterBigram, words[i+2])
		}
	}

	// Return the slice containing all words that occur after the specified bigram.
	return occurrencesAfterBigram
}
