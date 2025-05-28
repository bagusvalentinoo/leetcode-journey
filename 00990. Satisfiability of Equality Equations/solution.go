/**
 * Problem: 990. Satisfiability of Equality Equations
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func equationsPossible(equations []string) bool {
	// Initialize parent array for each letter and rank array for union-find optimization
	parent, rank := make([]int, 26), make([]int, 26)
	
	// Initialize each node as its own parent (disjoint sets)
	for i := 0; i < 26; i++ {
		parent[i] = i
	}

	// Find function returns the root parent of a node with path compression
	var find func(int) int

	find = func(x int) int {
		if parent[x] != x {
			parent[x] = find(parent[x])
		}

		return parent[x]
	}

	// Union function merges two sets if they have different roots
	var union func(int, int) bool

	// Union merges two sets by rank and returns whether a merge was performed
	union = func(x, y int) bool {
		// Find the root representatives of both elements
		rootX, rootY := find(x), find(y)

		// If they already belong to the same set, no union needed
		if rootX != rootY {
			// Merge smaller rank tree under the larger rank tree
			if rank[rootX] < rank[rootY] {
				parent[rootX] = rootY
			} else if rank[rootX] > rank[rootY] {
				parent[rootY] = rootX
			} else {
				// When ranks are equal, choose rootY as parent and increment its rank
				parent[rootX] = rootY
				rank[rootY]++
			}

			return true
		}

		return false
	}

	// First pass: process all equality constraints
	for _, equation := range equations {
		if equation[1:3] == "==" {
			x, y := int(equation[0] - 'a'), int(equation[3] - 'a')
			union(x, y)
		}
	}

	// Second pass: check if any inequality constraint is violated
	for _, eq := range equations {
		if eq[1:3] == "!=" {
			// Convert characters to zero-based indices (a=0, b=1, etc.)
			leftVar, rightVar := int(eq[0] - 'a'), int(eq[3] - 'a')
			
			// If variables belong to the same set, inequality is impossible
			if find(leftVar) == find(rightVar) {
				return false
			}
		}
	}
	
	return true
}