/**
 * Problem: 2243. Calculate Digit Sum of a String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func digitSum(s string, k int) string {
	// Continue until the string fits in one group
	for len(s) > k {
		// Build the bytes produced by the current round
		nextString := make([]byte, 0, len(s))

		// Process each consecutive group of at most k digits
		for start := 0; start < len(s); start += k {
			// Store the sum of digits in the current group
			groupSum := 0
			end := start + k
			if end > len(s) {
				end = len(s)
			}

			// Add every digit in the current group
			for index := start; index < end; index++ {
				groupSum += int(s[index] - '0')
			}

			// Append the group's digit sum
			nextString = appendDigitSum(nextString, groupSum)
		}

		// Use this round's result for the next round
		s = string(nextString)
	}

	// Return the string after all rounds
	return s
}

// Append a digit sum without requiring an additional package import
func appendDigitSum(result []byte, sum int) []byte {
	if sum >= 100 {
		result = append(result, byte(sum/100)+'0')
		sum %= 100
		result = append(result, byte(sum/10)+'0')
	} else if sum >= 10 {
		result = append(result, byte(sum/10)+'0')
	}

	return append(result, byte(sum%10)+'0')
}
