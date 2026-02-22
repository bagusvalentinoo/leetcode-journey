/**
 * Problem: 868. Binary Gap
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func binaryGap(n int) int {
	// Convert number to binary string
	binary := strconv.FormatInt(int64(n), 2)

	// Track maximum gap between consecutive 1's
	maxGap := 0
	// Track index of previous 1
	prevIndex := -1

	// Iterate through each character in binary string
	for i := 0; i < len(binary); i++ {
		if binary[i] == '1' {
			// Calculate gap if this is not the first 1
			if prevIndex != -1 {
				if i-prevIndex > maxGap {
					maxGap = i - prevIndex
				}
			}

			// Update previous index
			prevIndex = i
		}
	}

	// Return maximum gap
	return maxGap
}
