/**
 * Problem: 1178. Number of Valid Words for Each Puzzle
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 22 ms (Beats 100%)
 */

func findNumOfValidWords(words []string, puzzles []string) []int {
	// calcBitmask returns the bitmask representation of a string,
	// where each bit corresponds to a character 'a'-'z' present in the string.
	calcBitmask := func(str string) int {
		bitmask := 0

		for _, ch := range str {
			bitmask |= 1 << int(ch-'a')
		}

		return bitmask
	}

	// freqMap stores the frequency of each unique word bitmask.
	freqMap := map[int]int{}
	for _, word := range words {
		wordMask := calcBitmask(word)
		freqMap[wordMask]++
	}

	// ansSlice will hold the result for each puzzle.
	ansSlice := make([]int, len(puzzles))

	// Iterate over each puzzle to count valid words.
	for i, puzzle := range puzzles {
		validCount := 0
		puzzleMask := calcBitmask(puzzle)
		submask := puzzleMask

		// The first letter of the puzzle must be present in the word.
		firstLetterMask := 1 << int(puzzle[0]-'a')

		// Enumerate all submasks of the puzzle mask.
		for submask > 0 {
			// Check if submask contains the first letter.
			if submask&firstLetterMask != 0 {
				validCount += freqMap[submask]
			}
			// Move to the next submask.
			submask = (submask - 1) & puzzleMask
		}

		// Store the count of valid words for this puzzle.
		ansSlice[i] = validCount
	}

	// Return the result slice.
	return ansSlice
}
