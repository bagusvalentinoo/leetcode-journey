/**
 * Problem: 1307. Verbal Arithmetic Puzzle
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isSolvable(words []string, result string) bool {
	// Combine all words and result into a single slice
	allWords := append(words, result)

	// Get unique letters from all words and result
	letterSet := make(map[byte]bool)
	for _, word := range allWords {
		for i := 0; i < len(word); i++ {
			letterSet[word[i]] = true
		}
	}

	// Convert to slice
	letters := make([]byte, 0, len(letterSet))
	for ch := range letterSet {
		letters = append(letters, ch)
	}

	// If more than 10 unique letters, impossible (only digits 0-9)
	if len(letters) > 10 {
		return false
	}

	// Set to store letters that cannot be zero (first letters of each word)
	nonZero := make(map[byte]bool)

	// Mark first letters of each word as non-zero
	for _, word := range allWords {
		if len(word) > 1 {
			nonZero[word[0]] = true
		}
	}

	// Map to store coefficient for each letter (based on position value)
	coeff := make(map[byte]int)

	// Initialize coefficient for each letter to 0
	for _, ch := range letters {
		coeff[ch] = 0
	}

	// Calculate coefficients from words (positive contribution)
	for _, word := range words {
		// Start with multiplier 1 for units place
		multiplier := 1

		// Process from rightmost digit to leftmost
		for i := len(word) - 1; i >= 0; i-- {
			// Add current multiplier to letter's coefficient
			coeff[word[i]] += multiplier

			// Move to next place value (tens, hundreds, etc.)
			multiplier *= 10
		}
	}

	// Subtract coefficients from result (negative contribution)
	{
		multiplier := 1

		// Process from rightmost digit to leftmost
		for i := len(result) - 1; i >= 0; i-- {
			// Subtract current multiplier from letter's coefficient
			coeff[result[i]] -= multiplier

			// Move to next place value
			multiplier *= 10
		}
	}

	// Sort letters by absolute coefficient for better pruning
	// Larger coefficients first to reduce branching
	sort.Slice(letters, func(i, j int) bool {
		return abs(coeff[letters[i]]) > abs(coeff[letters[j]])
	})

	// Number of unique letters
	letterCount := len(letters)

	// Array of coefficients in same order as sorted letters
	coeffArray := make([]int, letterCount)
	for i, ch := range letters {
		coeffArray[i] = coeff[ch]
	}

	// Precompute suffix sums for pruning bounds
	suffixMax := make([]int, letterCount+1)
	suffixMin := make([]int, letterCount+1)

	// Calculate suffix bounds from right to left
	for i := letterCount - 1; i >= 0; i-- {
		// Current coefficient value
		currentCoeff := coeffArray[i]

		if currentCoeff > 0 {
			// Positive coefficient: max when digit is 9, min when digit is 0
			suffixMax[i] = suffixMax[i+1] + currentCoeff*9
			suffixMin[i] = suffixMin[i+1]
		} else {
			// Negative coefficient: max when digit is 0, min when digit is 9
			suffixMax[i] = suffixMax[i+1]
			suffixMin[i] = suffixMin[i+1] + currentCoeff*9
		}
	}

	// Track used digits (0-9) to ensure uniqueness
	usedDigits := make([]bool, 10)

	// Recursive backtracking to assign digits to letters
	var backtrack func(index int, currentSum int) bool
	backtrack = func(index int, currentSum int) bool {
		// Base case: all letters assigned, sum must be zero
		if index == letterCount {
			return currentSum == 0
		}

		// Pruning: impossible to reach zero with remaining letters
		if currentSum+suffixMin[index] > 0 || currentSum+suffixMax[index] < 0 {
			return false
		}

		// Current letter to assign
		currentChar := letters[index]

		// Coefficient for current letter
		currentCoeff := coeffArray[index]

		// Starting digit (0 unless letter is leading and cannot be zero)
		startDigit := 0
		if nonZero[currentChar] {
			startDigit = 1
		}

		// Try all possible digits for current letter
		for digit := startDigit; digit <= 9; digit++ {
			// Skip if digit already used
			if usedDigits[digit] {
				continue
			}

			// Mark digit as used
			usedDigits[digit] = true

			// Recurse with updated sum
			if backtrack(index+1, currentSum+currentCoeff*digit) {
				return true
			}

			// Backtrack: unmark digit
			usedDigits[digit] = false
		}

		// No valid digit found for current letter
		return false
	}

	// Start backtracking from first letter with sum 0
	return backtrack(0, 0)
}

// Helper function for absolute value
func abs(x int) int {
	if x < 0 {
		return -x
	}

	return x
}
