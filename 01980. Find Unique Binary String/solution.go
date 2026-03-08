/**
 * Problem: 1980. Find Unique Binary String
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func findDifferentBinaryString(nums []string) string {
	// Get length of binary strings
	length := len(nums)
	// Set to store seen numbers
	seenNumbers := make(map[int]bool)

	// Add all numbers from nums to set
	for _, binary := range nums {
		num, _ := strconv.ParseInt(binary, 2, 64)
		seenNumbers[int(num)] = true
	}

	// Check all possible numbers from 0 to 2^n - 1
	for i := 0; i < (1 << length); i++ {
		// If number not in set, it's our answer
		if !seenNumbers[i] {
			// Convert to binary string
			binary := strconv.FormatInt(int64(i), 2)

			// Pad with leading zeros if needed
			if len(binary) < length {
				binary = strings.Repeat("0", length-len(binary)) + binary
			}

			return binary
		}
	}

	// If no answer found, return empty string
	return ""
}
