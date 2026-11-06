/**
 * Problem: 2283. Check if Number Has Equal Digit Count and Digit Value
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func digitCount(num string) bool {
	// Count occurrences of each digit from 0 to 9
	counts := make([]int, 10)

	// Record the frequency of every digit in the input string
	for _, digit := range num {
		counts[digit-'0']++
	}

	// Compare each index's required count with its actual count
	for i := 0; i < len(num); i++ {
		if counts[i] != int(num[i]-'0') {
			return false
		}
	}

	// Return true when every required count matches
	return true
}
