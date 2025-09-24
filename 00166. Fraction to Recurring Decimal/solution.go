/**
 * Problem: 166. Fraction to Recurring Decimal
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func fractionToDecimal(numerator int, denominator int) string {
	// If numerator is zero, the result is always "0"
	if numerator == 0 {
		return "0"
	}

	// Use bytes.Buffer for efficient string concatenation
	var resultBuffer bytes.Buffer

	// Determine the sign of the result and append '-' if negative
	if ((numerator < 0) && (denominator > 0)) || ((numerator > 0) && (denominator < 0)) {
		resultBuffer.WriteString("-")
	}

	// Convert numerator and denominator to positive values for calculation
	absNumerator := int(math.Abs(float64(numerator)))
	absDenominator := int(math.Abs(float64(denominator)))

	// Write the integer part of the division to the buffer
	resultBuffer.WriteString(fmt.Sprintf("%d", absNumerator/absDenominator))

	// Update numerator to the remainder after integer division
	absNumerator %= absDenominator

	// If there is no remainder, return the result as it is
	if absNumerator == 0 {
		return resultBuffer.String()
	}

	// There is a fractional part, so add the decimal point
	resultBuffer.WriteString(".")

	// Map to store previously seen remainders and their corresponding positions in the result
	remainderPositionMap := make(map[int]int)
	remainderPositionMap[absNumerator] = resultBuffer.Len()

	// Loop to process the fractional part
	for absNumerator != 0 {
		// Multiply numerator by 10 to simulate long division
		absNumerator *= 10

		// Write the next digit of the fractional part
		resultBuffer.WriteString(fmt.Sprintf("%d", absNumerator/absDenominator))

		// Update numerator to the new remainder
		absNumerator %= absDenominator

		// If this remainder has been seen before, a repeating sequence is detected
		if repeatIndex, found := remainderPositionMap[absNumerator]; found {
			// Get the current result string
			resultString := resultBuffer.String()

			// Insert parentheses around the repeating part and return
			return resultString[:repeatIndex] + "(" + resultString[repeatIndex:] + ")"
		}

		// Store the position of this remainder
		remainderPositionMap[absNumerator] = resultBuffer.Len()
	}

	// If no repeating sequence, return the result as it is
	return resultBuffer.String()
}
