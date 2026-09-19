/**
 * Problem: 1790. Check if One String Swap Can Make Strings Equal
 *
 * Difficulty: Easy
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func areAlmostEqual(s1 string, s2 string) bool {
	// Store indices where the two strings differ
	diffs := make([]int, 0, 2)

	// Compare each position and collect mismatches
	for i := 0; i < len(s1); i++ {
		if s1[i] != s2[i] {
			diffs = append(diffs, i)
		}
	}

	// Return true if strings are already equal
	if len(diffs) == 0 {
		return true
	}
	// Return false unless there are exactly two mismatches
	if len(diffs) != 2 {
		return false
	}

	// Store first and second mismatch positions
	first, second := diffs[0], diffs[1]

	// Return true if swapping fixes both mismatches
	return s1[first] == s2[second] && s1[second] == s2[first]
}
