/**
 * Problem: 1306. Jump Game III
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func canReach(arr []int, start int) bool {
	// Get array length
	n := len(arr)

	// Initialize queue with starting index
	indexesToCheck := []int{start}

	// Track visited indices
	visited := make([]bool, n)

	// BFS traversal
	for len(indexesToCheck) > 0 {
		// Queue for next level
		nextIndexes := []int{}

		// Process current level
		for _, currentIndex := range indexesToCheck {
			// Check if we reached zero
			if arr[currentIndex] == 0 {
				return true
			}

			// Skip if already visited
			if !visited[currentIndex] {
				// Mark current index as visited
				visited[currentIndex] = true

				// Right jump
				rightJump := currentIndex + arr[currentIndex]

				// Check if right jump is within bounds and not visited
				if rightJump < n && !visited[rightJump] {
					nextIndexes = append(nextIndexes, rightJump)
				}

				// Left jump
				leftJump := currentIndex - arr[currentIndex]

				// Check if left jump is within bounds and not visited
				if leftJump >= 0 && !visited[leftJump] {
					nextIndexes = append(nextIndexes, leftJump)
				}
			}
		}

		// Move to next level
		indexesToCheck = nextIndexes
	}

	// No path found to zero
	return false
}
