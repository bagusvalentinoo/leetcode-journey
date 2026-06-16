/**
 * Problem: 3612. Process String with Special Operations I
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

// Pre-allocated buffer to avoid repeated memory allocations
var buffer [1 << 19]byte

func processStr(s string) string {
	// Track current length of result
	resultLength := 0

	// First pass: calculate final length needed
	// This helps allocate exactly the right amount of memory
	for _, currentChar := range s {
		// Letters increment length by 1
		if currentChar >= 'a' {
			resultLength++
		} else if currentChar == '#' {
			// '#' doubles the length
			resultLength *= 2
		}
	}

	// Slice the buffer to the required length
	result := buffer[:resultLength]

	// Index for writing to buffer
	writeIndex := 0

	// Process each character in the input string
	for i := 0; i < len(s); i++ {
		// Handle different commands
		switch s[i] {
		// Case '*': Remove last character
		case '*':
			writeIndex = max(0, writeIndex-1)

		// Case '#': Duplicate the current result
		case '#':
			// Copy existing characters after current position
			copy(result[writeIndex:], result[:writeIndex])
			writeIndex *= 2

		// Case '%': Reverse the result string
		case '%':
			// Find consecutive '%' characters
			j := i

			// Count how many '%' in a row
			for j < len(s)-1 && s[j+1] == '%' {
				j++
			}

			// Reverse only if even number of '%' (effectively no change for odd)
			if (j-i)%2 == 0 {
				// Reverse the result using two-pointer technique
				for left, right := 0, writeIndex-1; left < right; left, right = left+1, right-1 {
					result[left], result[right] = result[right], result[left]
				}
			}

			// Skip all consecutive '%' characters
			i = j

		// Default: Append lowercase letter
		default:
			// Store character in buffer
			result[writeIndex] = s[i]
			// Move write index forward
			writeIndex++
		}
	}

	// Return the final string from the buffer
	return string(result[:writeIndex])
}
