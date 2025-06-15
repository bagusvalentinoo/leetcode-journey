/**
 * Problem: 1432. Max Difference You Can Get From Changing an Integer
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxDiff(num int) int {
	// Convert number to string for digit manipulation
	numStr := strconv.Itoa(num)

	// Find maximum value by replacing first non-9 digit with 9
	getMax := func() int {
		for i := 0; i < len(numStr); i++ {
			if numStr[i] != '9' {
				newNum, _ := strconv.Atoi(strings.ReplaceAll(numStr, string(numStr[i]), "9"))

				return newNum
			}
		}
		
		return num
	}

	// Find minimum value by replacing appropriate digit with 0 or 1
	getMin := func() int {
		if numStr[0] != '1' {
			newNum, _ := strconv.Atoi(strings.ReplaceAll(numStr, string(numStr[0]), "1"))
			return newNum
		}

		for i := 1; i < len(numStr); i++ {
			if numStr[i] != '0' && numStr[i] != '1' {
				newNum, _ := strconv.Atoi(strings.ReplaceAll(numStr, string(numStr[i]), "0"))
				return newNum
			}
		}

		return num
	}

	// Return the difference between maximum and minimum values
	return getMax() - getMin()
}
