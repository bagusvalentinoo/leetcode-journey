/**
 * Problem: 1239. Maximum Length of a Concatenated String with Unique Characters
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func maxLength(arr []string) int {
	// createMask returns a bitmask representing the unique characters in str.
	// If str contains duplicate characters, it returns -1.
	createMask := func(str string) int {
		mask := 0

		// Iterate over each character in str.
		for i := range str {
			// Compute the bit for the current character.
			bit := 1 << (str[i] - 'a')

			// If the bit is already set, str has duplicate characters.
			if mask&bit != 0 {
				return -1
			}

			// Set the bit for the current character.
			mask |= bit
		}

		// Return the bitmask for str.
		return mask
	}

	// masks stores the bitmask for each valid string in arr.
	masks := []int{}
	// lengths stores the length of each valid string in arr.
	lengths := []int{}

	// Iterate over each string in arr.
	for _, str := range arr {
		// Get the bitmask for the current string.
		mask := createMask(str)
		
		// Skip strings with duplicate characters.
		if mask == -1 {
			continue
		}
		
		// Append the valid mask and its length.
		masks = append(masks, mask)
		lengths = append(lengths, len(str))
	}

	// n is the number of valid masks.
	n := len(masks)
	// result stores the maximum length found.
	result := 0

	// backtrack explores all combinations of masks to find the maximum length.
	var backtrack func(index int, currMask int, currLen int)
	backtrack = func(index int, currMask int, currLen int) {
		// Update result if the current length is greater.
		result = max(currLen, result)

		// Try to add each remaining mask if it does not overlap.
		for j := index; j < n; j++ {
			if currMask&masks[j] == 0 {
				backtrack(j+1, currMask|masks[j], currLen+lengths[j])
			}
		}
	}

	// Start backtracking from the first mask with an empty mask and length 0.
	backtrack(0, 0, 0)
	
	// Return the maximum length found.
	return result
}
