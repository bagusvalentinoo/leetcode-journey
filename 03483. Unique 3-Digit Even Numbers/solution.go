/**
 * Problem: 3483. Unique 3-Digit Even Numbers
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func totalNumbers(digits []int) int {
	// Map to store unique valid numbers
	uniqueNumbers := make(map[int]bool)

	// First digit position (hundreds)
	for firstIdx := 0; firstIdx < len(digits); firstIdx++ {
		// Digit at hundreds place
		firstDigit := digits[firstIdx]

		// Second digit position (tens)
		for secondIdx := 0; secondIdx < len(digits); secondIdx++ {
			// Digit at tens place
			secondDigit := digits[secondIdx]

			// Third digit position (units)
			for thirdIdx := 0; thirdIdx < len(digits); thirdIdx++ {
				// Digit at units place
				thirdDigit := digits[thirdIdx]

				// Check conditions: number is even, all indices distinct, first digit not zero
				if thirdDigit%2 == 0 &&
					firstIdx != secondIdx &&
					secondIdx != thirdIdx &&
					firstIdx != thirdIdx &&
					firstDigit != 0 {

					// Construct 3-digit number from digits
					numberValue := firstDigit*100 + secondDigit*10 + thirdDigit

					// Add to map
					uniqueNumbers[numberValue] = true
				}
			}
		}
	}

	// Return count of unique valid numbers
	return len(uniqueNumbers)
}
