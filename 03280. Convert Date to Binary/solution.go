/**
 * Problem: 3280. Convert Date to Binary
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func convertDateToBinary(date string) string {
	// Split date into year, month, day
	parts := strings.Split(date, "-")
	// Create a slice to store binary parts (year, month, day)
	binaryParts := make([]string, 3)

	// Iterate through each date part (year, month, day)
	for index, datePart := range parts {
		// Convert string part to integer
		numericValue, _ := strconv.Atoi(datePart)
		// Convert integer to binary string and store in slice
		binaryParts[index] = strconv.FormatInt(int64(numericValue), 2)
	}

	// Join back with hyphens
	return strings.Join(binaryParts, "-")
}
