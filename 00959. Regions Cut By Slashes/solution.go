/**
 * Problem: 959. Regions Cut By Slashes
 *
 * Difficulty: Medium
 *
 * Language: Go
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

 func regionsBySlashes(grid []string) int {
	// Size of grid and calculate total grid points (includes perimeter points)
	n := len(grid)
	pointsPerSide := n + 1
	totalPoints := pointsPerSide * pointsPerSide
	
	// Initialize union-find slice where -1 means root node
	parentArr := make([]int, totalPoints)
	for i := range parentArr {
		parentArr[i] = -1
	}

	// Connect all border points to form the outer boundary (region 0)
	for i := 0; i < pointsPerSide; i++ {
		for j := 0; j < pointsPerSide; j++ {
			if i == 0 || j == 0 || i == pointsPerSide-1 || j == pointsPerSide-1 {
				point := i*pointsPerSide + j
				parentArr[point] = 0
			}
		}
	}

	// Start with 1 region (outer boundary) and set point 0 as root
	regions := 1
	parentArr[0] = -1

	// Process each cell in the grid
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			// For '/' slash, connect top-right with bottom-left points
			if grid[i][j] == '/' {
				topRight := i*pointsPerSide + (j + 1)
				bottomLeft := (i+1)*pointsPerSide + j
				regions += union(topRight, bottomLeft, parentArr)
			// For '\' backslash, connect top-left with bottom-right points
			} else if grid[i][j] == '\\' {
				topLeft := i*pointsPerSide + j
				bottomRight := (i+1)*pointsPerSide + (j + 1)
				regions += union(topLeft, bottomRight, parentArr)
			}
		}
	}

	return regions
}

func find(parentArr []int, node int) int {
	// If node is root (value -1), return itself
	if parentArr[node] == -1 {
		return node
	}

	// Path compression: update parent to root and return root
	parentArr[node] = find(parentArr, parentArr[node])
	return parentArr[node]
}

func union(node1, node2 int, parentArr []int) int {
	// Find the root parents of both nodes
	p1 := find(parentArr, node1)
	p2 := find(parentArr, node2)

	// If nodes already share a parent, a cycle is detected (new region found)
	if p1 == p2 {
		return 1
	}

	// Merge the second tree into the first tree
	parentArr[p2] = p1

	// No new region formed
	return 0
}