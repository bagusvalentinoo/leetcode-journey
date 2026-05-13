/**
 * Problem: 3438. Find Valid Pair of Adjacent Digits in String
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findValidPair(s string) string {
	// Frequency array for digits 0-9
	digitFrequency := make([]int, 10)

	// Count occurrences of each digit in the string
	for i := 0; i < len(s); i++ {
		digitFrequency[s[i]-'0']++
	}

	// Iterate through adjacent pairs in the string
	for index := 0; index < len(s)-1; index++ {
		// Check if digits are different and frequencies match their digit values
		if s[index] != s[index+1] &&
			digitFrequency[s[index]-'0'] == int(s[index]-'0') &&
			digitFrequency[s[index+1]-'0'] == int(s[index+1]-'0') {
			// Return the valid pair as a substring
			return s[index : index+2]
		}
	}

	// No valid pair found
	return ""
}
