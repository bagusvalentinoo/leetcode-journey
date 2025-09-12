/**
 * Problem: 3227. Vowels Game in a String
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func doesAliceWin(s string) bool {
	// Iterate over each character in the input string 's'
	for _, char := range s {
		// Check if the character is a vowel using a bitmask:
		// 0x104111 is a bitmask where bits corresponding to vowels ('a', 'e', 'i', 'o', 'u') are set.
		// (char - 'a') computes the index for the character.
		// Shift the bitmask right by that index and check the least significant bit.
		if (0x104111>>(char-'a'))&1 != 0 {
			// If the character is a vowel, Alice wins; return true.
			return true
		}
	}

	// If no vowels are found, Alice does not win; return false.
	return false
}
