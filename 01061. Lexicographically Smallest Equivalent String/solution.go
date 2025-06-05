/**
 * Problem: 1061. Lexicographically Smallest Equivalent String
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func smallestEquivalentString(s1 string, s2 string, baseStr string) string {
	// Initialize a slice to track character equivalence classes
	parentMap := make([]int, 26)

	// Set each character as its own parent initially
	for i := range parentMap {
		parentMap[i] = i
	}

	var findRoot func(int) int

	// Find function to get the representative of a character's equivalence class
	findRoot = func(x int) int {
		if parentMap[x] != x {
			parentMap[x] = findRoot(parentMap[x])
		}

		return parentMap[x]
	}

	// Union function to merge two equivalence classes, keeping lexicographically smallest as root
	mergeClasses := func(x, y int) {
		rootX, rootY := findRoot(x), findRoot(y)

		if rootX < rootY {
			parentMap[rootY] = rootX
		} else if rootX > rootY {
			parentMap[rootX] = rootY
		}
	}

	// Process each character pair to build equivalence classes
	for i := 0; i < len(s1); i++ {
		mergeClasses(int(s1[i]-'a'), int(s2[i]-'a'))
	}

	// Create result with same length as baseStr
	resultStr := []byte(baseStr)

	// Map each character to its lexicographically smallest equivalent
	for i, char := range baseStr {
		smallestChar := findRoot(int(char - 'a'))
		resultStr[i] = byte(smallestChar + 'a')
	}

	return string(resultStr)
}