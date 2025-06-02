/**
 * Problem: 1003. Check If Word Is Valid After Substitutions
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func isValid(s string) bool {
	// Return false if the string is shorter than 3 characters
	if len(s) < 3 { return false }

	// Repeatedly remove "abc" until no occurrences remain
	for strings.Contains(s, "abc") { s = strings.ReplaceAll(s, "abc", "") }

	// The string is valid if all characters have been removed
	return len(s) == 0
}