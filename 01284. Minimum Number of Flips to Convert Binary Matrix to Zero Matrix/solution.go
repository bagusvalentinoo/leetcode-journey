/**
 * Problem: 1284. Minimum Number of Flips to Convert Binary Matrix to Zero Matrix
 *
 * Difficulty: Hard
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func minFlips(mat [][]int) int {
	// Get the dimensions of the matrix
	m, n := len(mat), len(mat[0])

	// Initialize the initial state of the matrix as an integer
	state := 0

	// Convert the matrix into a bitmask representation
	for i, row := range mat {
		for j, v := range row {
			if v == 1 {
				state |= 1 << (i*n + j)
			}
		}
	}

	// Initialize the queue for BFS with the initial state
	q := []int{state}

	// Create a map to track visited states
	vis := map[int]bool{state: true}

	// Initialize the answer to count the number of flips
	ans := 0

	// Define directions for flipping (up, down, left, right, center)
	dirs := []int{0, -1, 0, 1, 0, 0}

	// Perform BFS to find the minimum number of flips
	for len(q) > 0 {
		// Process all states at the current BFS level
		for t := len(q); t > 0; t-- {
			// Get the current state from the queue
			state = q[0]

			// If the current state is zero, return the answer
			if state == 0 {
				return ans
			}

			// Remove the processed state from the queue
			q = q[1:]

			// Iterate over each cell in the matrix
			for i := 0; i < m; i++ {
				for j := 0; j < n; j++ {
					// Create a copy of the current state
					nxt := state

					// Flip the current cell and its neighbors
					for k := 0; k < 5; k++ {
						x, y := i+dirs[k], j+dirs[k+1]

						// Skip invalid positions
						if x < 0 || x >= m || y < 0 || y >= n {
							continue
						}

						// Toggle the bit for the current cell
						if (nxt & (1 << (x*n + y))) != 0 {
							nxt -= 1 << (x*n + y)
						} else {
							nxt |= 1 << (x*n + y)
						}
					}

					// Add the new state to the queue if not visited
					if !vis[nxt] {
						vis[nxt] = true
						q = append(q, nxt)
					}
				}
			}
		}

		// Increment the flip count after processing a BFS level
		ans++
	}
	
	// Return -1 if no solution is found
	return -1
}
