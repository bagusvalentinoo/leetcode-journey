/**
 * Problem: 3783. Mirror Distance of an Integer
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func mirrorDistance(n int) int {
	// Convert integer to string
	numStr := strconv.Itoa(n)

	// Convert string to rune slice for proper Unicode handling
	runes := []rune(numStr)

	// Reverse the rune slice using two-pointer technique
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}

	// Convert reversed runes back to string
	reversedStr := string(runes)

	// Parse reversed string back to integer
	reversed, _ := strconv.Atoi(reversedStr)

	// Return absolute difference between original and reversed numbers
	return int(math.Abs(float64(n - reversed)))
}
