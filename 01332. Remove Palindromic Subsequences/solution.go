/**
 * Problem: 1332. Remove Palindromic Subsequences
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func removePalindromeSub(s string) int {
	// Return 0 if the string is empty
	if len(s) == 0 {
		return 0
	}

	// Two pointers to check if the string is a palindrome
	left, right := 0, len(s)-1

	// Check if all symmetric characters match
	for left < right {
		// If any symmetric characters do not match, return 2
		if s[left] != s[right] {
			return 2
		}

		// Move the pointers towards the center
		left++
		right--
	}

	// Return 1 if the string is already a palindrome
	return 1
}
