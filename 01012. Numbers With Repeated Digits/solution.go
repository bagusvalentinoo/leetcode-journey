/**
 * Problem: 1012. Numbers With Repeated Digits
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func numDupDigitsAtMostN(n int) int {
	// Initialize base number and digit count
	base, digits := 1, 1
	noDuplicates := 0
	currentCount, availableChoices := 9, 9

	// Count numbers with no duplicates less than base*10
	for base * 10 <= n {
		noDuplicates += currentCount
		currentCount *= availableChoices
		availableChoices--
		base *= 10
		digits++
	}

	// Track which digits have been used
	usedDigits := make([]bool, 10)
	position, remainingNum := 0, n

	// Process each digit position
	for ; position < digits; position++ {
		currentDigit := remainingNum/base
		startDigit := 1

		// First position can start from 1
		if position != 0 {
			startDigit--
		}

		// Count valid numbers with current prefix
		for ; startDigit < currentDigit; startDigit++ {
			if usedDigits[startDigit] {
				continue
			}
			
			noDuplicates += factorial(9-position, digits-position-1)
		}

		// If current digit was already used, no need to check further
		if usedDigits[currentDigit] {
			break
		}
		
		usedDigits[currentDigit] = true
		remainingNum %= base
		base /= 10
	}

	// Count the number itself if it has no duplicates
	if position == digits {
		noDuplicates++
	}

	// Return count of numbers with duplicates
	return n - noDuplicates
}

func factorial(x, bits int) int {
	// Return 1 if no more digits to select
	if bits == 0 {
		return 1
	}

	// Calculate permutation: x * (x-1) * ... * (x-bits+1)
	return x * factorial(x-1, bits-1)
}