/**
 * Problem: 1255. Maximum Score Words Formed by Letters
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxScoreWords(words []string, letters []byte, score []int) int {
	// Initialize a frequency array to count occurrences of each letter in 'letters'
	freq := make([]int, 26)

	// Populate the frequency array with counts of each letter
	for _, r := range letters {
		freq[r-'a']++
	}

	// Define a recursive backtracking function to calculate the maximum score
	var backtrack func(idx int) int
	backtrack = func(idx int) int {
		// Base case: if all words are processed, return 0
		if idx == len(words) {
			return 0
		}

		// Option 1: Skip the current word and move to the next
		skip := backtrack(idx + 1)

		// Retrieve the current word and initialize variables for score and validity
		w := words[idx]
		sc := 0
		ok := true

		// Iterate through each character in the word
		for _, r := range w {
			// Calculate the index of the character in the frequency array
			cIdx := r - 'a'

			// Decrement the frequency of the character
			freq[cIdx]--

			// Add the score of the character to the current word's score
			sc += score[r-'a']

			// If frequency becomes negative, mark the word as invalid
			if freq[cIdx] < 0 {
				ok = false
			}
		}

		// Option 2: Take the current word if it's valid
		take := 0
		if ok {
			// Add the current word's score and recurse for the next word
			take = sc + backtrack(idx+1)
		}

		// Restore the frequency array to its original state
		for _, r := range w {
			cIdx := r - 'a'
			freq[cIdx]++
		}

		// Return the maximum score between skipping and taking the word
		return max(skip, take)
	}

	// Start the backtracking process from the first word
	return backtrack(0)
}
