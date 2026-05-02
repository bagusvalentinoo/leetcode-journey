/**
 * Problem: 788. Rotated Digits
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func rotatedDigits(n int) int {
	// Digits that become different valid digits when rotated
	rotatingDigits := []int{2, 5, 6, 9}
	// Digits that remain valid and the same when rotated (0, 1, 8)
	sameDigits := []int{0, 1, 8}

	// All valid digits (rotating + same)
	validDigits := []int{2, 5, 6, 9, 0, 1, 8}

	// Convert number to string for digit-by-digit processing
	numberString := strconv.Itoa(n)

	// Counter for valid numbers
	validCount := 0

	// Flag indicating if we've already placed a digit that changes upon rotation
	hasRotatingDigit := false

	// Process each digit position from left to right
	for position := 0; position < len(numberString); position++ {
		// Get current digit at this position
		currentDigit := int(numberString[position] - '0')

		// Count how many valid digits are less than current digit
		lessThanCount := 0

		// Iterate through all valid digits to count those less than current digit
		for _, digit := range validDigits {
			// If valid digit is smaller, increment counter
			if digit < currentDigit {
				lessThanCount++
			}
		}

		// Add count of all combinations where current digit is less than given digit
		// Multiply by all possible combinations for remaining positions
		remainingPositions := len(numberString) - position - 1
		validCount += lessThanCount * int(math.Pow(float64(len(validDigits)), float64(remainingPositions)))

		// Subtract invalid combinations (those without any rotating digit) only if no rotating digit yet
		if !hasRotatingDigit {
			// Count how many same digits are less than current digit
			sameLessCount := 0

			// Iterate through same digits to count those less than current digit
			for _, digit := range sameDigits {
				// If same digit is smaller, increment counter
				if digit < currentDigit {
					sameLessCount++
				}
			}

			// Subtract combinations that have no rotating digit
			validCount -= sameLessCount * int(math.Pow(float64(len(sameDigits)), float64(remainingPositions)))
		}

		// Flag to check if current digit is a rotating digit
		isRotating := false

		// Check if current digit belongs to rotating digits list
		for _, digit := range rotatingDigits {
			// If current digit matches a rotating digit
			if digit == currentDigit {
				// Mark as rotating digit
				isRotating = true

				// Exit loop since we found a match
				break
			}
		}

		// Flag to check if current digit is a valid same digit
		isValidSame := false

		// Check if current digit belongs to same digits list
		for _, digit := range sameDigits {
			// If current digit matches a same digit
			if digit == currentDigit {
				// Mark as valid same digit
				isValidSame = true

				// Exit loop since we found a match
				break
			}
		}

		// If current digit is a rotating digit, mark that we have one
		if isRotating {
			hasRotatingDigit = true
		} else if !isValidSame {
			// If current digit is not valid at all, stop processing further digits
			return validCount
		}
	}

	// Add 1 if we have a rotating digit (count the number itself)
	if hasRotatingDigit {
		return validCount + 1
	}

	// Return count without adding 1 (number itself is not valid)
	return validCount
}
