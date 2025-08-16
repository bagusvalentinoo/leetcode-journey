/**
 * Problem: 1323. Maximum 69 Number
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maximum69Number (num int) int {
	// Convert the integer num to its string representation
	numStr := strconv.Itoa(num)

	// Replace the first occurrence of '6' with '9' in the string
	updatedNumStr := strings.Replace(numStr, "6", "9", 1)

	// Convert the updated string back to an integer
	result, _ := strconv.Atoi(updatedNumStr)
	
	// Return the resulting integer
	return result
}
