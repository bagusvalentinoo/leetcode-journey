/**
 * Problem: 1036. Escape a Large Maze
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 70 ms (Beats 100%)
 */

func isEscapePossible(blocked [][]int, source []int, target []int) bool {
		// Convert source and target to [2]int for easier map operations
		s := [2]int{source[0], source[1]}
		t := [2]int{target[0], target[1]}
		
		// Grid size limit (10^6)
		m := 1000000

		// Store number of blocked cells for area calculation
		numBlocks := len(blocked)
		
		// Convert blocked cells to map for O(1) lookup
		blocks := map[[2]int]bool{}
		for _, b := range blocked {
			blocks[[2]int{b[0], b[1]}] = true
		}
		
		// Direction vectors: up, left, right, down
		dirs := [4][2]int{{-1, 0}, {0, -1}, {0, 1}, {1, 0}}

		// BFS function to check if we can escape from start to target
		var bfs func(start, target [2]int) bool
		bfs = func(start, target [2]int) bool {
			// Initialize BFS queue with starting position
			q := [][2]int{start}
			
			// Track visited area size
			area := 0
			
			// Keep track of visited cells to avoid cycles
			visited := map[[2]int]bool{start: true}

			// Continue BFS until queue is empty
			for len(q) > 0 {
				// Process current level
				n := len(q)
				for i := 0; i < n; i++ {
					pos := q[i]
					
					// If we reached target or explored enough area to escape any possible enclosure
					// Maximum area that can be enclosed by n blocks is n*(n-1)/2
					if pos == target || area > numBlocks*(numBlocks-1)/2 {
						return true
					}
					
					// Increment visited area
					area++
					
					// Explore all 4 directions
					for _, dir := range dirs {
						x, y := pos[0]+dir[0], pos[1]+dir[1]
						
						// Check if next position is within grid bounds
						if x < 0 || y < 0 || x >= m || y >= m {
							continue
						}
						
						next := [2]int{x, y}
						
						// Skip if position is blocked or already visited
						if blocks[next] || visited[next] {
							continue
						}
						
						// Mark as visited and add to queue
						visited[next] = true
						q = append(q, next)
					}
				}
				// Remove processed level from queue
				q = q[n:]
			}
			
			// Could not reach target or escape the enclosure
			return false
		}

		// Check if both source can reach target AND target can reach source
		// This ensures bidirectional reachability
		return bfs(s, t) && bfs(t, s)
}
