/**
 * Problem: 165. Compare Version Numbers
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func compareVersion(version1 string, version2 string) int {
	// Initialize pointers for version1 and version2
	i, j := 0, 0
	// Get lengths of version1 and version2
	n, m := len(version1), len(version2)

	// Loop until both pointers reach the end of their respective strings
	for i < n || j < m {
		// Initialize numbers for current revision of version1 and version2
		var revision1, revision2 int

		// Parse the current revision number from version1
		for i < n && version1[i] != '.' {
			revision1 = revision1*10 + int(version1[i]-'0')
			i++
		}

		// Skip the dot in version1 if present
		if i < n && version1[i] == '.' {
			i++
		}

		// Parse the current revision number from version2
		for j < m && version2[j] != '.' {
			revision2 = revision2*10 + int(version2[j]-'0')
			j++
		}

		// Skip the dot in version2 if present
		if j < m && version2[j] == '.' {
			j++
		}

		// Compare the current revision numbers
		if revision1 < revision2 {
			return -1
		}
		if revision1 > revision2 {
			return 1
		}
	}

	// All revisions are equal
	return 0
}
