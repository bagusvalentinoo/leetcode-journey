/**
 * Problem: 3270. Find the Key of the Numbers
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func generateKey(num1 int, num2 int, num3 int) int {
	// Convert to 4-digit string with leading zeros if needed
	paddedNum1 := fmt.Sprintf("%04d", num1)
	// Convert to 4-digit string with leading zeros if needed
	paddedNum2 := fmt.Sprintf("%04d", num2)
	// Convert to 4-digit string with leading zeros if needed
	paddedNum3 := fmt.Sprintf("%04d", num3)

	// String to build the result key
	resultKey := ""

	// Compare digits at each position (0-3)
	for position := 0; position < 4; position++ {
		// Take the minimum digit among the three numbers at current position
		digit1 := int(paddedNum1[position] - '0')
		digit2 := int(paddedNum2[position] - '0')
		digit3 := int(paddedNum3[position] - '0')

		// Initialize minDigit with digit1
		minDigit := digit1

		// Update minDigit if digit2 is smaller
		if digit2 < minDigit {
			minDigit = digit2
		}
		// Update minDigit if digit3 is smaller
		if digit3 < minDigit {
			minDigit = digit3
		}

		// Append minimum digit to result key
		resultKey += strconv.Itoa(minDigit)
	}

	// Convert result string back to integer
	result, _ := strconv.Atoi(resultKey)

	// Return the generated key
	return result
}
