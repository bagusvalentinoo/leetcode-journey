/**
 * Problem: 1323. Maximum 69 Number
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maximum69Number(num int) int {
	// Convert number to string to access individual digits
	s := strconv.Itoa(num)

	// Iterate through each character in the string
	for i, c := range s {
		// Find the first occurrence of '6'
		if c == '6' {
			// Change it to '9' by replacing character at index i
			s = s[:i] + "9" + s[i+1:]
			// Stop after changing at most one digit
			break
		}
	}

	// Convert back to integer
	result, _ := strconv.Atoi(s)

	// Return the maximum number
	return result
}
