/**
 * Problem: 1422. Maximum Score After Splitting a String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxScore(s string) int {
	// Count total number of ones in the string
	totalOnesCount, leftZerosCount, leftOnesCount := 0, 0, 0

	// Variable to track the maximum score found
	maximumScore := int(^uint(0) >> 1) // Max int
	maximumScore = -maximumScore - 1   // Min int (equivalent to -Infinity)

	// First pass: count total ones in the string
	for _, character := range s {
		// If character is '1', increment total ones counter
		if character == '1' {
			totalOnesCount++
		}
	}

	// Second pass: iterate through each possible split point (excluding last character)
	for i := 0; i < len(s)-1; i++ {
		// If current character is '0', increment left zeros count
		if s[i] == '0' {
			leftZerosCount++
		} else {
			// If current character is '1', increment left ones count
			leftOnesCount++
		}

		// Calculate score: zeros in left part + ones in right part
		currentScore := leftZerosCount + (totalOnesCount - leftOnesCount)

		// Update maximum score if current is larger
		if currentScore > maximumScore {
			maximumScore = currentScore
		}
	}

	// Return the maximum score found
	return maximumScore
}
