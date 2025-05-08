func letterCombinations(digits string) []string {
    // Return empty slice if no digits provided
    if len(digits) == 0 {
      return []string{}
    }

    // Map each digit to its corresponding letters on a phone keypad
    digitToChar := map[byte]string{
      '2': "abc",
      '3': "def",
      '4': "ghi",
      '5': "jkl",
      '6': "mno",
      '7': "pqrs",
      '8': "tuv",
      '9': "wxyz",
    }

    // Store all possible combinations
    result := []string{}

    // Recursive function to build combinations
    var backtrack func(int, string)
    backtrack = func(index int, path string) {
			// Base case: when we've processed all digits
			if index == len(digits) {
				result = append(result, path)
				return
			}

			// Try each letter for the current digit
			currentDigit := digits[index]
			for _, char := range digitToChar[currentDigit] {
				backtrack(index+1, path+string(char))
			}
    }

    // Start backtracking from first digit with empty path
    backtrack(0, "")

    return result
}