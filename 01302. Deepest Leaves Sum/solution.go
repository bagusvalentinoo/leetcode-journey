/**
 * Problem: 1302. Deepest Leaves Sum
 *
 * Difficulty: Medium
 *
 * Language: Golang
 *
 * Performance: Runtime - 0 ms (Beats 100%)
 */

func deepestLeavesSum(root *TreeNode) int {
	// Handle empty tree case
	if root == nil {
		return 0
	}

	// Initialize queue for level-order traversal
	queue := []*TreeNode{root}

	// Pointer for queue processing
	queueIndex := 0

	// Store sum of current level
	currentLevelSum := 0

	// Process tree level by level
	for queueIndex < len(queue) {
		// Get number of nodes in current level
		levelSize := len(queue) - queueIndex

		// Reset sum for new level
		currentLevelSum = 0

		// Process all nodes at current level
		for i := 0; i < levelSize; i++ {
			// Get next node from queue
			node := queue[queueIndex]
			queueIndex++

			// Add node value to current level sum
			currentLevelSum += node.Val

			// Add children to queue for next level
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
	}

	// Return sum of deepest level
	return currentLevelSum
}
